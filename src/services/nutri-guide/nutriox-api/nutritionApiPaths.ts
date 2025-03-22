export const nutritionApiPaths = {
  BASE: "/nutri-app/v1/food/search",
  GET_COMMON_FOOD: () => `${nutritionApiPaths.BASE}/common`,
  GET_BRANDED_FOOD: (id: string) => `${nutritionApiPaths.BASE}/branded/${id}`,
  GET_FOODS_BY_NAME: () => `${nutritionApiPaths.BASE}`,
};