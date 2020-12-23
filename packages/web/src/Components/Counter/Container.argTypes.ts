import { ArgType } from "@storybook/addons";
import { ICounterProps } from "./Counter.props";

export const argTypes : Record<keyof ICounterProps | string, ArgType> = {

  label: {
    defaultValue: null,
    type: "string",
  },
  readOnly: {
    defaultValue: false,
    type: "boolean",
  },
  size: {
    defaultValue: "small",
    type: "string",
  },
  initialValue: {
    defaultValue: 1,
    type: "number",
  },
  maxValue: {
    defaultValue: 99,
    type: "number",
  },
  minValue: {
    defaultValue: 0,
    type: "number",
  },
  onChange: {
    defaultValue: null,
    type: "function",
  },
  onIncrement: {
    defaultValue: null,
    type: "function",
  },
  onDecrement: {
    defaultValue: null,
    type: "function",
  },
};

export default argTypes;
