import { createPortal } from "react-dom";
import { type CheckoutModal } from "../../types/modules";
import { useImperativeHandle, useRef } from "react";
import CheckoutForm from "./CheckoutForm";
import Button from "../UI/Button";

export default function CheckoutModal({ checkoutRef }: CheckoutModal) {
  const ref = useRef<HTMLDialogElement | null>(null);

  useImperativeHandle(checkoutRef, () => {
    return {
      openCheckoutModal() {
        ref.current?.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={ref}>
      <CheckoutForm />
      <form method="dialog">
        <Button>Buy</Button>
      </form>
    </dialog>,
    document.getElementById("modal")!
  );
}
