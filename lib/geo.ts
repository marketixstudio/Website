/** Coordinates used by the globe on location pages. Plain data, safe to import from server and client code. */

export type LatLng = [number, number];
export const PUNE: LatLng = [18.5204, 73.8567];

/** City coordinates for the location pages (city centres). */
export const cityCoords: Record<string, LatLng> = {
  pune: PUNE,
  mumbai: [19.076, 72.8777],
  bangalore: [12.9716, 77.5946],
  "delhi-ncr": [28.6139, 77.209],
  hyderabad: [17.385, 78.4867],
  ahmedabad: [23.0225, 72.5714],
  "dubai-uae": [25.2048, 55.2708],
  "london-uk": [51.5074, -0.1278],
  usa: [40.7128, -74.006],
  australia: [-33.8688, 151.2093],
  canada: [43.6532, -79.3832],
  singapore: [1.3521, 103.8198],
};
