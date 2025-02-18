import { ButtonProps } from "../../types/modules";

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
