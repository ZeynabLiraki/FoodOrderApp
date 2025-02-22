
import Product from "./Product";

import { useGetMeals } from "../utils/queries";
import ErrorPage from "./ErrorPage";

export default function Products() {
  const { data, isError, isPending, error } = useGetMeals();

  if (isPending) {
    return <div style={{textAlign:"center"}}>Fetching Meals...</div>;
  }
  if (isError) {
    return <ErrorPage title="Faild to load Meals" message={error.message}/>
   
  }
  return (
    <ul id="meals">
      {data?.map(meal => <Product key={meal.id} {...meal} />)}
    </ul>
  );
}
