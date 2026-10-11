"use client";

import { Container, Input, Text } from "@repo/ui";
import React, { ReactNode, useEffect, useId, useRef, useState } from "react";
import { loadGoogleMapsLibrary } from "@/features/general/utils/google-maps";

export type AddressSelection = {
  addressLine: string;
  placeId: string | null;
  latitude: number | null;
  longitude: number | null;
};

type Suggestion = {
  placeId: string;
  fullText: string;
  mainText: string;
  secondaryText: string;
  prediction: google.maps.places.PlacePrediction;
};

const MIN_QUERY_LENGTH = 3;
const DEBOUNCE_MS = 300;

export const AddressAutocomplete = ({
  value,
  onChange,
  placeholder,
  rightIcon,
}: {
  value: string;
  onChange: (address: AddressSelection) => void;
  placeholder?: string;
  rightIcon?: ReactNode;
}) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const sessionTokenRef =
    useRef<google.maps.places.AutocompleteSessionToken | null>(null);
  // Bumped on every keystroke/selection so slow responses can't overwrite newer input.
  const requestIdRef = useRef(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const listId = useId();

  useEffect(() => {
    // Warm up the library so the first search isn't waiting on a script download.
    loadGoogleMapsLibrary("places").catch(() => {});
    return () => clearTimeout(debounceRef.current);
  }, []);

  const fetchSuggestions = async (input: string, requestId: number) => {
    try {
      const { AutocompleteSessionToken, AutocompleteSuggestion } =
        await loadGoogleMapsLibrary("places");
      sessionTokenRef.current ??= new AutocompleteSessionToken();
      const response =
        await AutocompleteSuggestion.fetchAutocompleteSuggestions({
          input,
          sessionToken: sessionTokenRef.current,
          includedRegionCodes: ["ng"],
        });
      if (requestId !== requestIdRef.current) return;

      const nextSuggestions = response.suggestions.flatMap(
        ({ placePrediction }) =>
          placePrediction
            ? [
                {
                  placeId: placePrediction.placeId,
                  fullText: placePrediction.text.text,
                  mainText:
                    placePrediction.mainText?.text ?? placePrediction.text.text,
                  secondaryText: placePrediction.secondaryText?.text ?? "",
                  prediction: placePrediction,
                },
              ]
            : [],
      );
      setSuggestions(nextSuggestions);
      setActiveIndex(-1);
      setIsOpen(nextSuggestions.length > 0);
    } catch (error) {
      // The typed text is still saved as the address, so failing quietly is fine.
      console.error("Failed to fetch address suggestions", error);
      if (requestId === requestIdRef.current) {
        setSuggestions([]);
        setIsOpen(false);
      }
    }
  };

  const handleInputChange = (text: string) => {
    const requestId = ++requestIdRef.current;
    // Free text is always kept; coordinates only exist for a picked suggestion.
    onChange({ addressLine: text, placeId: null, latitude: null, longitude: null });

    clearTimeout(debounceRef.current);
    if (text.trim().length < MIN_QUERY_LENGTH) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }
    debounceRef.current = setTimeout(
      () => fetchSuggestions(text.trim(), requestId),
      DEBOUNCE_MS,
    );
  };

  const handleSelect = async (suggestion: Suggestion) => {
    const requestId = ++requestIdRef.current;
    clearTimeout(debounceRef.current);
    setIsOpen(false);
    setSuggestions([]);
    onChange({
      addressLine: suggestion.fullText,
      placeId: suggestion.placeId,
      latitude: null,
      longitude: null,
    });

    try {
      const place = suggestion.prediction.toPlace();
      await place.fetchFields({ fields: ["location"] });
      if (requestId !== requestIdRef.current) return;
      onChange({
        addressLine: suggestion.fullText,
        placeId: suggestion.placeId,
        latitude: place.location?.lat() ?? null,
        longitude: place.location?.lng() ?? null,
      });
    } catch (error) {
      console.error("Failed to fetch place location", error);
    } finally {
      // fetchFields ends the billing session; the next search needs a new token.
      sessionTokenRef.current = null;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % suggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) =>
        index <= 0 ? suggestions.length - 1 : index - 1,
      );
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      handleSelect(suggestions[activeIndex]);
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <Container className="relative">
      <Input
        label=""
        value={value}
        placeholder={placeholder}
        rightIcon={rightIcon}
        autoComplete="off"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={
          activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined
        }
        onChange={({ target }) => handleInputChange(target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(suggestions.length > 0)}
        onBlur={() => setIsOpen(false)}
      />
      {isOpen && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full -mt-3 z-20 max-h-72 overflow-y-auto rounded-xl border border-line bg-surface py-1 shadow-lg"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion.placeId}
              id={`${listId}-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              // Keep focus in the input so onBlur doesn't close the list before the click lands.
              onMouseDown={(event) => event.preventDefault()}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleSelect(suggestion)}
              className={`cursor-pointer px-4 py-3 ${index === activeIndex ? "bg-background" : ""}`}
            >
              <Text variant="action-label" tone="primary">
                {suggestion.mainText}
              </Text>
              {suggestion.secondaryText && (
                <Text variant="body-sm" tone="secondary">
                  {suggestion.secondaryText}
                </Text>
              )}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};
