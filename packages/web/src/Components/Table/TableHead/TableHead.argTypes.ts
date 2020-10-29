import { ArgType } from "@storybook/addons";
import { ITableHeadProps } from "./TableHead.props";
import { objectArgType } from "../../../../.storybook/argTypes/objectArgType";

export const argTypes : Record<keyof ITableHeadProps | string, ArgType> = {
  children: {
    description: "The table itself, normally `TableRow`.",
    table: {
      type: { summary: "node" },
    },
  },
  classes: {
    ...objectArgType,
    description: "Override or extend the styles applied to the component.",
  },
  component: {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    table: {
      defaultValue: { summary: "\"thead\"" },
      type: { summary: "elementType" },
    },
  },
};

export default argTypes;
