import { useActionState } from "react";
import { useFoodContext } from "../../store/context-food";
import { useProgressContext } from "../../store/user-progress-context";
import { currencyFormatter } from "../../utild/formatting";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import { InitialFormState } from "../../types/modules";

export default function CheckoutForm() {
  const { progress, hideCheckout } = useProgressContext();
  const { orderDetails } = useFoodContext();

  const initialFormState: InitialFormState = {
    fullName: "",
    email: "",
    street: "",
    postalCode: "",
    city: "",
  };
  const { formState, formDispatch } = useActionState<InitialFormState>(
    handleSubmit,
    initialFormState
  );
  function handleSubmit(state: InitialFormState, formData: FormData) {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const street = formData.get("street") as string;
    const postalCode = formData.get("postalCode") as string;
    const city = formData.get("city") as string;



    return state;
  }
  const totalPrice = orderDetails.reduce((acc, item) => {
    return acc + Number(item.price) * item.quantity!;
  }, 0);
  const handleHideCheckout = () => {
    hideCheckout();
  };

  return (
    <Modal open={progress === "checkout"} >
      <form action={formDispatch}>
        <h1>Checkout the Form</h1>
        <p>
          Total Price: <strong>{currencyFormatter.format(totalPrice)}</strong>
        </p>

        <Input label="Full Name" name="fullName" type="text" />
        <Input label="E-mail" name="email" type="email" />
        <Input label="Street" name="street" type="text" />

        <div className="control-row">
          <Input label="Postal Code" name="postalCode" type="text" />
          <Input label="City" name="city" type="text" />
        </div>

        <p className="modal-actions">
          <Button textOnly type="button" onClick={handleHideCheckout}>
            Close
          </Button>
          <Button textOnly={false}>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
