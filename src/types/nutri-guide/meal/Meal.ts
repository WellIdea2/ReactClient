import { CalorieView, ServingView } from "../../shared/Food";

export interface FoodSimpleView {
  name: string;
  calories: CalorieView;
  serving: ServingView; 
}

export interface MealView {
  id: string;
  name: string;
  consumedCalories: number;
  foods: FoodSimpleView[];
}

export interface MealRequest {
  name: string;
}