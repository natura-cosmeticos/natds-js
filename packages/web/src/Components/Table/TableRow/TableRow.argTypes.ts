import { ArgType } from "@storybook/addons";
import { ITableRowProps } from "./TableRow.props";

export const argTypes : Record<keyof ITableRowProps | string, ArgType> = {
  children: {
    description: "Should be valid `tr` children such as `TableCell`.",
    table: {
      type: { summary: "node" },
    },
  },
  classes: {
    control: { type: "object" },
    description: "Override or extend the styles applied to the component. See CSS API below for more details.",
    table: {
      type: { summary: "object" },
    },
    type: { name: "object", required: false },
  },
  component: {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    table: {
      defaultValue: { summary: "\"tr\"" },
      type: { summary: "elementType" },
    },
  },
  hover: {
    control: { type: "boolean" },
    description: "If `true`, the table row will shade on hover.",
    table: {
      defaultValue: { summary: false },
      type: { summary: "bool" },
    },
    type: { name: "boolean", required: false },
  },
  selected: {
    control: { type: "boolean" },
    description: "If `true`, the table row will have the selected shading.",
    table: {
      defaultValue: { summary: false },
      type: { summary: "bool" },
    },
    type: { name: "boolean", required: false },
  },
};

export default argTypes;
