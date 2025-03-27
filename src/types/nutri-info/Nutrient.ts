export interface Nutrient {
  name: string;
  description: string;
  functions: Record<string, string>;
  sources: Record<string, string>;
  dailyIntake: string;
  deficiency: string;
  overdose: string;
  res: string[];
}
