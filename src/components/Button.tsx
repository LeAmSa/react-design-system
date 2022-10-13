import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonPros {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonPros) {
  //usando o Slot do radix para deixar a tag html dinâmica
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "w-full px-3 py-4 font-semibold text-black text-sm rounded bg-cyan-500 transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
    >
      {children}
    </Comp>
  );
}
