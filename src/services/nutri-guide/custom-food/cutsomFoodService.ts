import { CustomFilterCriteria } from '../../../types/nutri-guide/custom-food/CustomFood';
import { FoodRequest, OwnedFoodView } from '../../../types/shared/Food';
import { Page } from '../../../types/shared/Page';
import instance from '../../config/axiosConfig';
import { customFoodPaths } from './customFoodPaths';

export async function getAllCustomFoods(filter: CustomFilterCriteria) {
  const response = await instance.get<Page<OwnedFoodView>>(customFoodPaths.GET_ALL(), {
    params: filter,
  });

  return response.data;
}

export async function getCustomFoodById(id: string) {
  const response = await instance.get<OwnedFoodView>(customFoodPaths.GET_BY_ID(id));

  return response.data;
}

export async function createCustomFood(food: FoodRequest) {
  const response = await instance.post<OwnedFoodView>(customFoodPaths.CREATE(), food);

  return response.data;
}

export async function updateCustomFood(id: string, food: FoodRequest) {
  const response = await instance.put<OwnedFoodView>(customFoodPaths.UPDATE(id), food);

  return response.data;
}

export async function deleteCustomFood(id: string) {
  const response = await instance.delete(customFoodPaths.DELETE(id));

  return response;
}