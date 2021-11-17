import { InputHTMLAttributes } from "react";

interface Props {
  name: string;
  value?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

export const Input = ({ name, value, ...rest }: InputProps) => {
  return (
    <div>
      <input id={name} value={value} {...rest} />
    </div>
  );
};
