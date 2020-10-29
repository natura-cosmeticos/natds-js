import { ArgType } from "@storybook/addons";
import { ILinearProgressProps } from "./LinearProgress";

export const argTypes : Record<keyof ILinearProgressProps | string, ArgType> = {
  value: {
    control: {
      max: 100, min: 0, step: 1, type: "range",
    },
    table: { type: { summary: "number" } },
    type: { name: "number", required: false },
  },
};

export default argTypes;
