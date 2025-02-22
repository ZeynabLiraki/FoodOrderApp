import { InputProps } from "../../types/modules";

export default function Input({ label, name, ...props }: InputProps) {
  return (
    <p className="control">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...props} required/>
    </p>
  );
}
