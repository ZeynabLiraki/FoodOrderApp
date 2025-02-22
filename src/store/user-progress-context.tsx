import { createContext, use, useState } from "react";
import {
  UserProgressContextProps,
  UserProgressContextProviderProps
} from "../types/contextFood";

const defaultValue: UserProgressContextProps = {
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {}
};

export const UserProgressContext = createContext<UserProgressContextProps>(
  defaultValue
);

export default function UserProgressContextProvider({
  children
}: UserProgressContextProviderProps) {
  const [userProgress, setUserProgress] = useState<string>("");

  const showCart = () => {
    setUserProgress("cart");
  };
  const hideCart = () => {
    setUserProgress("");
  };
  const showCheckout = () => {
    setUserProgress("checkout");
  };
  const hideCheckout = () => {
    setUserProgress("");
  };

  const contextValue: UserProgressContextProps = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout
  };
  return (
    <UserProgressContext.Provider value={contextValue}>
      {children}
    </UserProgressContext.Provider>
  );
}

export function useProgressContext() {
  const ctx = use(UserProgressContext);

  if (ctx === null) {
    throw new Error("progress context is empty");
  }
  return ctx;
}
