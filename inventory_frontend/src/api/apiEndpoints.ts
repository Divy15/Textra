export const API_ENDPOINTS = {
  onboarding: {
    storeOwner: "/onboarding/store/owner/details",
  },
  upload: {
    doc: "/upload/doc"
  }
} as const;

// Optional: Create a type out of your endpoints for strict type-checking elsewhere
export type ApiEndpoints = typeof API_ENDPOINTS;