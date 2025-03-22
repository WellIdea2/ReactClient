export const userDetailsPaths = {
  BASE: "/api/v1/user-details",
  CREATE: () => `${userDetailsPaths.BASE}`,
  GET_BY_ID: (id: string) => `${userDetailsPaths.BASE}/${id}`,
  EDIT: (id: string) => `${userDetailsPaths.BASE}/${id}`,
  ME: () => `${userDetailsPaths.BASE}/me`,
};