import { useFoodContext } from "../store/context-food";
import { MealProps } from "../types/modules";
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
    <div className="meal-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="meal-item-price">$ {price}</p>
      <p className="meal-item-description">{description}</p>
      <Button className="meal-item-actions" onClick={handleAddTocart}>
        Add to Cart
      </Button>
    </div>
  );
}
