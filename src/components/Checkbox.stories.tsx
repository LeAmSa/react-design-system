import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxPros } from "./Checkbox";
import { Text } from "./Text";

//Component do storybook
export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxPros>;

//Variações do component
export const Default: StoryObj<CheckboxPros> = {};
