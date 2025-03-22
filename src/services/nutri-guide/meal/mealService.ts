import { MealRequest, MealView } from '../../../types/nutri-guide/meal/Meal';
import { Page } from '../../../types/shared/Page';
import instance from '../../config/axiosConfig';
import { mealPaths } from './mealPaths';

export async function getAllMeals(recordId: string) {
  const response = await instance.get<Page<MealView>>(mealPaths.GET_ALL(recordId));

  return response.data;
}

export async function getMealById(id: string) {
  const response = await instance.get<MealView>(mealPaths.GET_BY_ID(id));

  return response.data;
}

export async function createMeal(recordId: string, meal: MealRequest) {
  const response = await instance.post<MealView>(mealPaths.CREATE(recordId), meal);

  return response.data;
}

export async function updateMeal(id: string, meal: MealRequest) {
  const response = await instance.patch<MealView>(mealPaths.UPDATE(id), meal);

  return response.data;
}

export async function deleteMeal(id: string) {
  const response = await instance.delete(mealPaths.DELETE(id));
  
  return response;
}