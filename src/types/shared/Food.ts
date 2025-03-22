export interface FoodView {
  name: string;
  calories: CalorieView;
  mainServing: ServingView;
  foodDetails: FoodInfoView;
  otherServing: ServingView[];
  nutrients: NutritionView[]
}

export interface OwnedFoodView extends FoodView {
  id: string;
}

export interface CalorieView {
  amount: number;
  unit: string;
}

export interface ServingView {
  amount: number;
  servingWeight: number;
  metric: string;
}

export interface FoodInfoView {
  info: string;
  largeInfo: string;
  picture: string;
}

export interface NutritionView {
  name: string;
  unit: string;
  amount: number;
}

export interface FoodRequest {
  name: string;
  calories: CalorieRequest;
  mainServing: ServingRequest;
  foodDetails: FoodInfoRequest;
  otherServing: ServingRequest[];
  nutrients: NutritionRequest[];
}

export interface CalorieRequest {
  amount: number;
  unit: string;
}

export interface ServingRequest {
  amount: number;
  servingWeight: number;
  metric: string;
}

export interface FoodInfoRequest {
  info: string;
  largeInfo: string;
  picture: string;
}

export interface NutritionRequest {
  name: string;
  unit: string;
  amount: number;
}