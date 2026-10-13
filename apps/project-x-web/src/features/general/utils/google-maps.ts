import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

// Advanced markers and dark map styling both need a Map ID. DEMO_MAP_ID works
// for development; set a real one from Google Cloud for production.
export const GOOGLE_MAPS_MAP_ID =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID ?? "DEMO_MAP_ID";

export const NIGERIA_CENTER = { lat: 9.082, lng: 8.6753 };

let isConfigured = false;

export const loadGoogleMapsLibrary = <
  TLibraryName extends keyof google.maps.ImportLibraryMap,
>(
  libraryName: TLibraryName,
) => {
  if (!isConfigured) {
    setOptions({
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
      v: "weekly",
    });
    isConfigured = true;
  }
  return importLibrary(libraryName);
};
