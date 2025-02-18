import { useFoodContext } from "../../store/context-food";
import { type MealSelected } from "../../types/contextFood";
import Button from "../UI/Button";


export default function CartItem({ id, name, price, quantity }: MealSelected) {
  const { updateCartItem } = useFoodContext();
  const handleIncrease = () => {
    updateCartItem({ id, name, price, quantity }, 1);
  };
  const handleDecrease = () => {
    updateCartItem({ id, name, price, quantity }, -1);
  };
  return (
    <li className="cart-item">
      <div>
        <span>{name}</span>
        <span> $ {price}</span>
      </div>
      <p className="cart-item-actions">
        <Button onClick={handleIncrease}>+</Button>
        <span>{quantity}</span>
        <Button onClick={handleDecrease}>-</Button>
      </p>
    </li>
  );
}
