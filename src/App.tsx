import Cart from "./components/cart/Cart";
import CheckoutForm from "./components/checkout/CheckoutForm";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <Products />
      <Cart />
      <CheckoutForm />
    </>
  );
}

export default App;
