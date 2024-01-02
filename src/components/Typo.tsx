import React from "react";
import { twMerge } from "tailwind-merge";

const Typo = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const defaultClassName = "text-sm";

  return <p className={twMerge(defaultClassName, className)}>{children}</p>;
};

export default Typo;
