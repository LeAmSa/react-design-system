import { Meta, StoryObj } from "@storybook/react";
import { Text, TextPros } from "./Text";

//Component do storybook
export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem ipsum",
    size: "md",
  },

  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextPros>;

//Variações do component
export const Default: StoryObj<TextPros> = {};

export const Small: StoryObj<TextPros> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextPros> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextPros> = {
  args: {
    asChild: true,
    children: <p>Text with P tag</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
