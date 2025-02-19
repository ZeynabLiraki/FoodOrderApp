import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  type Ref,
} from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  textOnly: boolean;
  className?: string;
  children: ReactNode;
};

export type ProductProps = {
  mealPic: string;
  foodTitle: string;
  price: number;
  description: string;
};

export type MealProps = {
  description: string;
  id: string;
  image: string;
  name: string;
  price: string;
};

export type TotalMealsProps = MealProps[];

export type CartRef = {
  openModal: () => void;
};

export type CheckoutRef = {
  openCheckoutModal: () => void;
};

export type CheckoutModal = {
  checkoutRef: Ref<CheckoutRef>;
};

export type ModalProps = {
  children: ReactNode;
  className?: string;
  open: boolean;
  modalActions?: ReactNode;
  onClose?: () => void;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

export type InitialFormState = {
  fullName: string;
  email: string;
  street: string;
  postalCode: string;
  city: string;
};
