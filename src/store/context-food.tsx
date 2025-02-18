import { createContext, use, useReducer } from "react";
import {
  FoodAction,
  FoodContextProviderProps,
  InitialContextValue,
  MealSelected,
  OrderDetails,
} from "../types/contextFood";

export const FoodContext = createContext<InitialContextValue | null>(null);

function foodReducerFn(state: OrderDetails, action: FoodAction) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const totalSelectedMeals: OrderDetails = [...state];
      const indextItem: number = state.findIndex(
        (item) => item.id === action.payload.item.id
      );

      if (indextItem < 0) {
        totalSelectedMeals.push({ ...action.payload.item, quantity: 1 });
      } else {
        const existingMeal = { ...totalSelectedMeals[indextItem] };
        const updatedMeal = {
          ...existingMeal,
          quantity: existingMeal!.quantity! + 1,
        };
        totalSelectedMeals[indextItem] = updatedMeal;
      }
      return [...totalSelectedMeals];
    }
    case "UPDATE_CART": {
      const totalSelectedMeals: OrderDetails = [...state];
      const indextItem: number = state.findIndex(
        (item) => item.id === action.payload.item.id
      );

      const updatedItem = { ...totalSelectedMeals[indextItem] };
      updatedItem.quantity! += action.payload.value;

      if (updatedItem!.quantity! <= 0) {
        totalSelectedMeals.splice(indextItem, 1);
      } else {
        totalSelectedMeals[indextItem] = updatedItem;
      }

      return [...totalSelectedMeals];
    }
    default:
      return state;
  }
}

export default function FoodContextProvider({
  children,
}: FoodContextProviderProps) {
  const initialState: OrderDetails = [];

  const [mealDetails, foodDistatch] = useReducer(foodReducerFn, initialState);

  const addToCart = (item: MealSelected) => {
    foodDistatch({
      type: "ADD_TO_CART",
      payload: { item },
    });
  };

  const updateCartItem = (item: MealSelected, value: number) => {
    foodDistatch({
      type: "UPDATE_CART",
      payload: { item, value },
    });
  };

  const contextValue: InitialContextValue = {
    orderDetails: mealDetails,
    addToCart,
    updateCartItem,
  };
  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
}

export function useFoodContext() {
  const ctx = use(FoodContext);

  if (ctx === null) {
    throw new Error("Context is null!");
  }

  return ctx;
}
