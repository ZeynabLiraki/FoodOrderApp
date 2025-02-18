import { ButtonHTMLAttributes, ReactNode, type Ref } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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

export type CartModalProps = {
  CartModalRef: Ref<CartRef>;
};


export type CheckoutRef={
  openCheckoutModal:()=>void
}

export type CheckoutModal={
  checkoutRef: Ref<CheckoutRef>
}