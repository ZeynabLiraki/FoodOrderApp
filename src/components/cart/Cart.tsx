import { useFoodContext } from "../../store/context-food";
import CartItem from "./CartItem";

export default function Cart() {
  const { orderDetails } = useFoodContext();
  const totalPrice = orderDetails.reduce((acc, item) => {
    return acc + Number(item.price) * item.quantity!;
  }, 0);
  return (
    <div className="cart-total">
      <ul>
        {orderDetails.map((meal) => (
          <CartItem {...meal} />
        ))}
      </ul>
      <p>
        <strong>$ {totalPrice}</strong>
      </p>
    </div>
  );
}
