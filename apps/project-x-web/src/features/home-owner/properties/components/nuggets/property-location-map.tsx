"use client";

import { Container } from "@repo/ui";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  GOOGLE_MAPS_MAP_ID,
  NIGERIA_CENTER,
  loadGoogleMapsLibrary,
} from "@/features/general/utils/google-maps";

const COUNTRY_ZOOM = 6;
const PROPERTY_ZOOM = 14;

export const PropertyLocationMap = ({
  latitude,
  longitude,
}: {
  latitude: number | null;
  longitude: number | null;
}) => {
  const { isDark } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef =
    useRef<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  // colorScheme can only be set when the map is created, so a theme change rebuilds it.
  useEffect(() => {
    let isCancelled = false;

    Promise.all([
      loadGoogleMapsLibrary("maps"),
      loadGoogleMapsLibrary("marker"),
    ])
      .then(([{ Map }, { AdvancedMarkerElement }]) => {
        if (isCancelled || !containerRef.current) return;
        mapRef.current = new Map(containerRef.current, {
          center: NIGERIA_CENTER,
          zoom: COUNTRY_ZOOM,
          mapId: GOOGLE_MAPS_MAP_ID,
          colorScheme: isDark ? "DARK" : "LIGHT",
          disableDefaultUI: true,
          zoomControl: true,
          gestureHandling: "cooperative",
        });
        markerRef.current = new AdvancedMarkerElement();
        setIsReady(true);
      })
      .catch((error) => console.error("Failed to load Google Maps", error));

    return () => {
      isCancelled = true;
      if (markerRef.current) markerRef.current.map = null;
      markerRef.current = null;
      mapRef.current = null;
      setIsReady(false);
    };
  }, [isDark]);

  useEffect(() => {
    const map = mapRef.current;
    const marker = markerRef.current;
    if (!isReady || !map || !marker) return;

    // No coordinates means the address was typed by hand, so there's nothing to pin.
    if (latitude === null || longitude === null) {
      marker.map = null;
      return;
    }

    const position = { lat: latitude, lng: longitude };
    marker.position = position;
    marker.map = map;
    map.panTo(position);
    map.setZoom(PROPERTY_ZOOM);
  }, [isReady, latitude, longitude]);

  return (
    <Container className="h-80 w-full overflow-hidden rounded-2xl">
      <div
        key={isDark ? "dark" : "light"}
        ref={containerRef}
        className="h-full w-full"
      />
    </Container>
  );
};
