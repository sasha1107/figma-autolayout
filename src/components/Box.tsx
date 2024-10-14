import type { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps extends ComponentProps<"div">, PropsWithChildren {}
const Box = ({ className, children, ...props }: BoxProps) => {
  return (
    <div
      className={twMerge(
        "w-40 h-40 flex justify-center items-center text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
