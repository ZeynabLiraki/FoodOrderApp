import { useRef } from "react";
import Logo from "../assets/logo.jpg";
import CartModal from "./cart/CartModa";
import Button from "./UI/Button";
import { type CartRef } from "../types/modules";
import { useFoodContext } from "../store/context-food";

export default function Header() {
  const CartModalRef = useRef<CartRef | null>(null);
  const { orderDetails } = useFoodContext();

  const handleOpenModal = () => {
    CartModalRef.current?.openModal();
  };
  return (
    <>
      <CartModal CartModalRef={CartModalRef} />
      <header id="main-header">
        <h1 id="title">
          <img src={Logo} alt="React food" />
          ReactFood
        </h1>
        <Button className="button" onClick={handleOpenModal}>
          Cart ({orderDetails.length})
        </Button>
      </header>
    </>
  );
}
