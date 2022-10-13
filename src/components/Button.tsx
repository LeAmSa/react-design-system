import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonPros extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonPros) {
  //usando o Slot do radix para deixar a tag html dinâmica
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "w-full px-4 py-3 font-semibold text-black text-sm rounded bg-cyan-500 transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
