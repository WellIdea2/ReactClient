export const mealPaths = {
  BASE: "/nutri-app/v1/meal",
  GET_ALL: (recordId: string) => `${mealPaths.BASE}?recordId=${recordId}`,
  GET_BY_ID: (id: string) => `${mealPaths.BASE}/${id}`,
  CREATE: (recordId: string) => `${mealPaths.BASE}?recordId=${recordId}`,
  UPDATE: (id: string) => `${mealPaths.BASE}/${id}`,
  DELETE: (id: string) => `${mealPaths.BASE}/${id}`
};