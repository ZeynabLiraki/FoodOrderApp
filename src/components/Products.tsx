import { useEffect, useState } from "react";
import { TotalMealsProps } from "../types/modules";
import Product from "./Product";
import { instanceFood } from "../services/Services";
import { TotalMeals } from "../services/Urls";

export default function Products() {
  const [totalMealsList, setTotalMealsList] = useState<TotalMealsProps>([]);
  useEffect(() => {
    async function FetchTotalMeal() {
      const response = (await instanceFood.get(TotalMeals)) as TotalMealsProps;
      setTotalMealsList(response);
    }
    FetchTotalMeal();
  }, []);

  return (
    <ul className="meals">
      {totalMealsList.map((meal) => (
        <li key={meal.id}>
          <Product {...meal} />
        </li>
      ))}
    </ul>
  );
}
