import { MealFoodFilter } from '../../../types/nutri-guide/meal-food/MealFood';
import { FoodRequest, OwnedFoodView } from '../../../types/shared/Food';
import { Page } from '../../../types/shared/Page';
import instance from '../../config/axiosConfig';
import { foodPaths } from './foodPaths';

export async function getAllMealFoods(mealId: string, filter: MealFoodFilter) {
  const response = await instance.get<Page<OwnedFoodView>>(foodPaths.GET_ALL(mealId), {
    params: filter,
  });

  return response.data;
}

export async function getMealFoodById(mealId: string, foodId: string) {
  const response = await instance.get<OwnedFoodView>(foodPaths.GET_BY_ID(mealId, foodId));

  return response.data;
}

export async function createMealFood(mealId: string, food: FoodRequest) {
  const response = await instance.post<OwnedFoodView>(foodPaths.CREATE(mealId), food);

  return response.data;
}

export async function updateMealFood(mealId: string, foodId: string, food: FoodRequest) {
  const response = await instance.put<OwnedFoodView>(foodPaths.UPDATE(mealId, foodId), food);

  return response.data;
}

export async function deleteMealFood(mealId: string, foodId: string) {
  const response = await instance.delete(foodPaths.DELETE(mealId, foodId));
  
  return response;
}