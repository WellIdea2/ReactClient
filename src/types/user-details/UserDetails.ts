export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum WorkoutState {
  SEDENTARY = 'SEDENTARY',
  LIGHTLY_ACTIVE = 'LIGHTLY_ACTIVE',
  MODERATELY_ACTIVE = 'MODERATELY_ACTIVE',
  VERY_ACTIVE = 'VERY_ACTIVE',
  SUPER_ACTIVE = 'SUPER_ACTIVE',
}

export interface UserDetailsView {
  id: string;
  kilograms: number;
  height: number;
  workoutState: WorkoutState;
  gender: Gender;
  age: number;
  userId: string;
}

export interface UserDetailsCreateRequest {
  kilograms: number;
  workoutState: WorkoutState;
  gender: Gender;
  height: number;
  age: number;
}

export interface UserDetailsEditRequest {
  kilograms?: number;
  workoutState?: WorkoutState;
  gender?: Gender;
  height?: number;
  age?: number;
}