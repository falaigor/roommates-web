import { TextareaHTMLAttributes } from "react";
interface Props {
  name: string;
  maxLength: number;
  value: string;
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Props;

export const Textarea = ({
  name,
  maxLength,
  value,
  ...rest
}: TextareaProps) => {
  return <textarea name={name} maxLength={maxLength} value={value} {...rest} />;
};
