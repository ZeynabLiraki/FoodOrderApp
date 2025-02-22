import { useMemo } from "react";
import Logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useFoodContext } from "../store/context-food";
import { useProgressContext } from "../store/user-progress-context";

export default function Header() {
  const { orderDetails } = useFoodContext();
  const { showCart } = useProgressContext();

  const handleOpenModal = () => {
    showCart();
  };

  const totallCartItems = useMemo(
    () =>
      orderDetails.reduce((accumulator, item) => {
        return (accumulator += item.quantity!);
      }, 0),
    [orderDetails]
  );

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={Logo} alt="Food Logo" />
          <h1>ReactFood</h1>
        </div>
        <Button textOnly onClick={handleOpenModal}>
          Cart ({totallCartItems})
        </Button>
      </header>
    </>
  );
}
