export interface NutritionIntakeView {
  name: string;
  dailyConsumed: number;
  recommendedIntake: number;
  measurement: string;
}

export interface RecordView {
  id: string;
  date: string;
  dailyCalories: number;
  consumedCalories: number;
  vitaminIntake: NutritionIntakeView[];
  mineralIntakes: NutritionIntakeView[];
  macroIntakes: NutritionIntakeView[];
}

export interface RecordCreateRequest {
  date: string;
}

export interface RecordUpdateRequest {
  dailyCalories: number;
}