import { useQuery } from "@tanstack/react-query";
import { Nutrient } from "../../types/nutri-info/Nutrient";

const fetchNutrients = async (): Promise<Nutrient[]> => {
  const response = await fetch("/nutrients.json");
  if (!response.ok) {
    throw new Error("Failed to fetch nutrient data");
  }
  return response.json();
};

export const useGetNutrientsQuery = () => {
  return useQuery<Nutrient[]>({
    queryKey: ["nutrients"],
    queryFn: fetchNutrients,
  });
};
