export const userPaths = {
  BASE: '/api/v1/user',
  CREATE: () => `${userPaths.BASE}`,
  ME: () => `${userPaths.BASE}/me`,
  GET_BY_ID: (id: string) => `${userPaths.BASE}/${id}`,
  EDIT: (id: string) => `${userPaths.BASE}/${id}`,
  DELETE: (id: string) => `${userPaths.BASE}/${id}`,
  GET_ALL: () => `${userPaths.BASE}`,
};