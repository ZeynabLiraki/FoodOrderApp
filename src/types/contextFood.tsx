import { ReactNode } from "react";

export type MealSelected = {
  id: string;
  name: string;
  price: string;
  quantity?: number;
};

export type OrderDetails = MealSelected[];

export type InitialContextValue = {
  orderDetails: OrderDetails;
  addToCart: (item: MealSelected) => void;
  updateCartItem: (item: MealSelected, value: number) => void;
};

export type FoodContextProviderProps = {
  children: ReactNode;
};

export type AddToCartAction = {
  type: "ADD_TO_CART";
  payload: {
    item: MealSelected;
  };
};

export type UpdateCartAction = {
  type: "UPDATE_CART";
  payload: {
    item: MealSelected;
    value: number;
  };
};

export type FoodAction = AddToCartAction | UpdateCartAction;
