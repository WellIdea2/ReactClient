export interface NutritionFilter {
  name?: string;
  unit?: string;
  biggerThan?: number;
  smallerThan?: number;
}

export interface MealFoodFilter {
  name?: string;
  nutrients?: NutritionFilter[];
}