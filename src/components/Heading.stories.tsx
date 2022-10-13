import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingPros } from "./Heading";

//Component do storybook
export default {
  title: "Components/Heading",
  component: Heading,
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
} as Meta<HeadingPros>;

//Variações do component
export const Default: StoryObj<HeadingPros> = {};

export const Small: StoryObj<HeadingPros> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeadingPros> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingPros> = {
  args: {
    asChild: true,
    children: <h1>Heading with H1</h1>,
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
