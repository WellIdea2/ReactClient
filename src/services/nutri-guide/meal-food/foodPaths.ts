export const foodPaths = {
  BASE: "/nutri-app/v1/meal",
  GET_ALL: (mealId: string) => `${foodPaths.BASE}/${mealId}`,
  GET_BY_ID: (mealId: string, foodId: string) => `${foodPaths.BASE}/${mealId}/${foodId}`,
  CREATE: (mealId: string) => `${foodPaths.BASE}/${mealId}`,
  UPDATE: (mealId: string, foodId: string) => `${foodPaths.BASE}/${mealId}/${foodId}`,
  DELETE: (mealId: string, foodId: string) => `${foodPaths.BASE}/${mealId}/${foodId}`
};