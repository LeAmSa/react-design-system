import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextPros {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ size = "md", children, asChild }: TextPros) {
  //usando o Slot do radix para deixar a tag html dinâmica
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-lg": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
