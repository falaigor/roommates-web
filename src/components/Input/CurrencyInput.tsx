import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { InputHTMLAttributes } from "react";

const defaultMaskOptions = {
  prefix: "$",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ".",
  allowDecimal: true,
  decimalSymbol: ",",
  decimalLimit: 2,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: true,
};

interface Props {
  placeholder: string;
  type: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

export const CurrencyInput = ({ placeholder, type, ...rest }: InputProps) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });

  return (
    <MaskedInput
      mask={currencyMask}
      placeholder={placeholder}
      type={type}
      {...rest}
    />
  );
};
