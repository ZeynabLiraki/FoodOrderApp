import { useImperativeHandle, useRef } from "react";
import { CartModalProps, CheckoutRef } from "../../types/modules";
import { createPortal } from "react-dom";
import Button from "../UI/Button";
import { useFoodContext } from "../../store/context-food";
import Cart from "./Cart";
import CheckoutModal from "../checkout/CheckoutModal";

export default function CartModal({ CartModalRef }: CartModalProps) {
  const { orderDetails } = useFoodContext();
  const checkoutRef = useRef<CheckoutRef | null>(null);
  const ref = useRef<HTMLDialogElement | null>(null);

  useImperativeHandle(CartModalRef, () => {
    return {
      openModal() {
        ref.current?.showModal();
      },
    };
  });

  const handleCheckout = () => {
    checkoutRef.current?.openCheckoutModal();
  };

  let modalActions = <Button>Close</Button>;
  if (orderDetails.length > 0) {
    modalActions = (
      <p className="modal-actions">
        <Button>Close</Button>
        <br />
        <Button onClick={handleCheckout}>Checkout</Button>
      </p>
    );
  }

  return createPortal(
    <>
      <CheckoutModal checkoutRef={checkoutRef} />
      <dialog ref={ref} className="cart">
        <h2>Cart Modal</h2>
        <Cart />
        <form method="dialog">{modalActions}</form>
      </dialog>
    </>,
    document.getElementById("modal")!
  );
}
