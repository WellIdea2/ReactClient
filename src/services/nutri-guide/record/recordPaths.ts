export const recordPaths = {
  BASE: "/nutri-app/v1/record",
  GET_ALL: () => `${recordPaths.BASE}`,
  GET_BY_ID: (id: string) => `${recordPaths.BASE}/${id}`,
  CREATE: () => `${recordPaths.BASE}`,
  UPDATE: (id: string) => `${recordPaths.BASE}/${id}`,
  DELETE: (id: string) => `${recordPaths.BASE}/${id}`
};