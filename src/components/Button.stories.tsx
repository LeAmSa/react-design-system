import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonPros } from "./Button";

//Component do storybook
export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create account",
  },

  argTypes: {},
} as Meta<ButtonPros>;

//Variações do component
export const Default: StoryObj<ButtonPros> = {
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
