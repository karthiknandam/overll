import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BgColor = "primary" | "secondary";
const Button = ({
  children,
  className,
  bgColor,
  onClick,
  ...other
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  bgColor: BgColor;
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={twMerge(
          `text-xs px-2 font-semibold py-1.5 text-center rounded-md cursor-pointer ${
            bgColor === "primary" ? "bg-main-0 text-black" : "bg-black/25"
          }`,
          className
        )}
        {...other}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
