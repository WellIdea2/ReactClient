import { FoodView } from '../../../types/shared/Food';
import instance from '../../config/axiosConfig';
import { nutritionApiPaths } from './nutritionApiPaths';

export async function getCommonFoodBySearch(term: string) {
  const response = await instance.get<FoodView[]>(nutritionApiPaths.GET_COMMON_FOOD(), {
    params: { term },
  });

  return response.data;
}

export async function getBrandedFoodById(id: string) {
  const response = await instance.get<FoodView>(nutritionApiPaths.GET_BRANDED_FOOD(id));

  return response.data;
}

export async function getAllFoodsByFoodName(foodName: string) {
  const response = await instance.get<FoodView[]>(nutritionApiPaths.GET_FOODS_BY_NAME(), {
    params: { foodName },
  });

  return response.data;
}