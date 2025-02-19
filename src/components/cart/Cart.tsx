import { useFoodContext } from "../../store/context-food";
import { useProgressContext } from "../../store/user-progress-context";
import { currencyFormatter } from "../../utild/formatting";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

export default function Cart() {
  const { orderDetails } = useFoodContext();
  const { progress, hideCart, showCheckout } = useProgressContext();
  console.log("progress:", progress, progress === "cart");

  const totalPrice = orderDetails.reduce((acc, item) => {
    return acc + Number(item.price) * item.quantity!;
  }, 0);

  const handleHideCart = () => {
    hideCart();
  };

  const handleCheckout = () => {
    showCheckout();
  };

  let modalActions = (
    <p className="cart-total">
      <Button textOnly onClick={handleHideCart}>
        Close
      </Button>
    </p>
  );
  if (orderDetails.length > 0) {
    modalActions = (
      <p className="cart-total">
        <Button textOnly onClick={handleHideCart}>
          Close
        </Button>
        <Button textOnly={false} onClick={handleCheckout}>
          {" "}
          Checkout
        </Button>
      </p>
    );
  }
  return (
    <Modal
      open={progress === "cart"}
      className="cart"
      modalActions={modalActions}
      onClose={handleHideCart}
    >
      <ul>
        {orderDetails.map((meal) => (
          <CartItem key={meal.id} {...meal} />
        ))}
      </ul>
      <p className="cart-total">
        <strong>{currencyFormatter.format(totalPrice)}</strong>
      </p>
    </Modal>
  );
}
