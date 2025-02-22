import { useQuery } from "@tanstack/react-query";
import { instanceFood } from "../services/Services";
import { TotalMeals } from "../services/Urls";
import { TotalMealsProps } from "../types/modules";

export const useGetMeals = () => {
    const fetchMeals = async (): Promise<TotalMealsProps> => {
    const response = (await instanceFood.get(TotalMeals)) as TotalMealsProps;
    return response;
  };

  return useQuery({
    queryKey: ["meals"],
    queryFn: fetchMeals,
    refetchOnWindowFocus: false
  });
};
