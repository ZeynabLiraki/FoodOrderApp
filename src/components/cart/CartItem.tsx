import { useFoodContext } from "../../store/context-food";
import { type MealSelected } from "../../types/contextFood";
import { currencyFormatter } from "../../utild/formatting";
import Button from "../UI/Button";
export default function CartItem({ id, name, price, quantity }: MealSelected) {
  const { updateCartItem } = useFoodContext();
  const handleIncrease = () => {
    updateCartItem(id, 1);
  };
  const handleDecrease = () => {
    updateCartItem(id, -1);
  };
  return (
    <li className="cart-item">
      <p>
        {" "}
        {name} - {quantity} X {currencyFormatter.format(+price)}
      </p>
      <p className="cart-item-actions">
        <Button textOnly={false} onClick={handleIncrease}>
          +
        </Button>
        <span>{quantity}</span>
        <Button textOnly={false} onClick={handleDecrease}>
          -
        </Button>
      </p>
    </li>
  );
}
