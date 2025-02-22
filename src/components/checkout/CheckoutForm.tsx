import { useActionState, useEffect } from "react";
import { useFoodContext } from "../../store/context-food";
import { useProgressContext } from "../../store/user-progress-context";
import { currencyFormatter } from "../../utils/formatting";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import { InitialFormState, Order } from "../../types/modules";
import { instanceFood } from "../../services/Services";
import { Orders } from "../../services/Urls";
import { useMutation } from "@tanstack/react-query";
import ErrorPage from "../ErrorPage";

async function submitOrder(data: Order): Promise<any> {
  try {
    const response = await instanceFood.post(Orders , { order: data });
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export default function CheckoutForm() {
  const { progress, hideCheckout } = useProgressContext();
  const { orderDetails, clearCart } = useFoodContext();
  const initialState: InitialFormState = {
    name: "",
    email: "",
    street: "",
    city: "",
    ["postal-code"]: "",
  };
  const [formState, formDispatch, isPending] = useActionState<InitialFormState>(
    formAction,
    initialState
  );

 

  function formAction(prevState: InitialFormState, formData: FormData) {
    const enteredData = Object.fromEntries(formData);
    const customer: InitialFormState = {
      name: enteredData.name as string,
      email: enteredData.email as string,
      street: enteredData.street as string,
      ["postal-code"]: enteredData.name as string,
      city: enteredData.city as string,
    };
    const order = {
      items: orderDetails,
      customer: customer,
    };
    mutate(order);
    return enteredData;
  }

  const { mutate, isSuccess, isError, error, reset  } = useMutation<
    unknown,
    Error,
    Order
  >({
    mutationFn: submitOrder,
    onSuccess: () => {
      hideCheckout();
      clearCart();
      reset();
    },
    onError: (error: Error) => {
      alert(error.message);
    },
  });
 
  const totalPrice = orderDetails.reduce((acc, item) => {
    return acc + Number(item.price) * item.quantity!;
  }, 0);

  const handleHideCheckout = () => {
    hideCheckout();
  };

  if (isSuccess) {
    return (
      <Modal open={progress === ""}>
        {" "}
        <h2>Success</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will back to you with more details via email within the next few
          minutes.
        </p>
        <form method="dialog">
          <Button textOnly={false}>Close</Button>
        </form>
      </Modal>
    );
  }

  return (
    <Modal open={progress === "checkout"}>
      <form action={formDispatch}>
        <h1>Checkout the Form</h1>
        <p>
          Total Price: <strong>{currencyFormatter.format(totalPrice)}</strong>
        </p>

        <Input label="Full Name" name="name" type="text" />
        <Input label="E-mail" name="email" type="email" />
        <Input label="Street" name="street" type="text" />

        <div className="control-row">
          <Input label="Postal Code" name="postal-code" type="text" />
          <Input label="City" name="city" type="text" />
        </div>
        {isError && (
          <ErrorPage
            title="Failed to submit the order"
            message={error.message}
          />
        )}

        <p className="modal-actions">
          <Button textOnly type="reset" onClick={handleHideCheckout}>
            Close
          </Button>
          {!isPending ? (
            <Button textOnly={false} type="submit">
              Submit Order
            </Button>
          ) : (
            <Button textOnly disabled>
              Sending order data ...
            </Button>
          )}
        </p>
      </form>
    </Modal>
  );
}
