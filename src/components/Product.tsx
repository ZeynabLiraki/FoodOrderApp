import { BaseURL } from "../services/Urls";
import { useFoodContext } from "../store/context-food";
import { MealProps } from "../types/modules";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";

export default function Product({
  id,
  image,
  name,
  price,
  description,
}: MealProps) {
  const { addToCart } = useFoodContext();

  const handleAddTocart = () => {
    addToCart({ id, name, price });
  };

  return (
    <li className="meal-item" key={id}>
      <article>
        <img src={`${BaseURL}/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(+price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button textOnly={false} onClick={handleAddTocart}>
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
}
