import { ArgType } from "@storybook/addons";
import { IRatingProps } from "./Rating.props";
import { sizes } from "./__fixtures__/sizes";

export const argTypes : Record<keyof IRatingProps, ArgType> = {
  classes: {
    control: { type: "text" },
    description: "The classes to use on the container 'div'",
    table: {
      type: { summary: "string" },
    },
    type: { name: "string", required: false },
  },
  id: {
    control: { type: "text" },
    description: "The input id property",
    table: {
      type: { summary: "string" },
    },
    type: { name: "string", required: true },
  },
  style: {
    control: { type: "object" },
    description: "Inline style for the container 'div'",
    table: {
      type: { summary: "React.CSSProperties" },
    },
    type: { name: "object", required: false },
  },
  size: {
    control: {
      options: sizes,
      type: "select",
    },
    description: "The size of the Rating",
    table: {
      defaultValue: { summary: "\"small\"" },
      type: { summary: "'small' \\| 'standard' \\| 'semi' \\| 'semix'" },
    },
  },
  rate: {
    control: {
      type: "number",
    },
    description: "The rating value",
    table: {
      type: { summary: "Value between 0 and 5" },
    },
  },
};

export default argTypes;