export const customFoodPaths = {
  BASE: "/nutri-app/v1/food/custom",
  GET_ALL: () => `${customFoodPaths.BASE}`,
  GET_BY_ID: (id: string) => `${customFoodPaths.BASE}/${id}`,
  CREATE: () => `${customFoodPaths.BASE}`,
  UPDATE: (id: string) => `${customFoodPaths.BASE}/${id}`,
  DELETE: (id: string) => `${customFoodPaths.BASE}/${id}`
};