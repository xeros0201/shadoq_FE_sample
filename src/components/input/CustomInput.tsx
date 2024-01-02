import { ChangeEvent, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Typo from "../Typo";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  name: string;
  type: string;
  placeholder: string;
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = (props: InputProps) => {
  const { children, name, type, className, placeholder, value, onChange } =
    props;
  const defaultClassName =
    "h-10 w-full outline-0 border rounded-lg p-3 text-sm transition-all ease-linear duration-300 focus:shadow-lg focus:border-sky-400";
  return (
    <div className="flex items-center py-4 ">
      <Typo className="w-1/3">{children}</Typo>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={twMerge(defaultClassName, className)}
      />
    </div>
  );
};

export default CustomInput;
