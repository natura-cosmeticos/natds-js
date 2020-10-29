import { ArgType } from "@storybook/addons";
import { ITableFooterProps } from "./TableFooter.props";
import objectArgType from "../../../../.storybook/argTypes/objectArgType";

export const argTypes : Record<keyof ITableFooterProps | string, ArgType> = {
  children: {
    description: "The content of the component, normally `TableRow`.",
    table: {
      type: { summary: "node" },
    },
  },
  classes: {
    ...objectArgType,
    description: "Override or extend the styles applied to the component. See CSS API below for more details",
  },
  component: {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    table: {
      defaultValue: { summary: "\"tfoot\"" },
      type: { summary: "elementType" },
    },
  },
};
