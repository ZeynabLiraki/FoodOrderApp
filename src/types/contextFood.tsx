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
  updateCartItem: (id: string, value: number) => void;
  clearCart: () => void;
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
    id: string;
    value: number;
  };
};

export type CleanCart = {
  type: "CLEAR_CART";
};

export type FoodAction = AddToCartAction | UpdateCartAction | CleanCart;

export type UserProgressContextProps = {
  progress: string;
  showCart: () => void;
  hideCart: () => void;
  showCheckout: () => void;
  hideCheckout: () => void;
};

export type UserProgressContextProviderProps = {
  children: ReactNode;
};
