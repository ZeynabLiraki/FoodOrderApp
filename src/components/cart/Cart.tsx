import { useFoodContext } from "../../store/context-food";
import { useProgressContext } from "../../store/user-progress-context";
import { currencyFormatter } from "../../utils/formatting";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

export default function Cart() {
  const { orderDetails } = useFoodContext();
  const { progress, hideCart, showCheckout } = useProgressContext();

  const totalPrice = orderDetails.reduce((acc, item) => {
    return acc + Number(item.price) * item.quantity!;
  }, 0);

  const handleHideCart = () => {
    hideCart();
  };

  const handleShowCheckout = () => {
    showCheckout();
  };

  return (
    <Modal open={progress === "cart"} className="cart">
      <ul>
        {orderDetails.map(meal => <CartItem key={meal.id} {...meal} />)}
      </ul>
      <p className="cart-total">
        <strong>
          {currencyFormatter.format(totalPrice)}
        </strong>
      </p>
      <p className="cart-total">
        <Button textOnly onClick={handleHideCart}>
          Close
        </Button>
        {orderDetails.length > 0 &&
          <Button textOnly={false} onClick={handleShowCheckout}>
            {" "}Checkout
          </Button>}
      </p>
    </Modal>
  );
}
