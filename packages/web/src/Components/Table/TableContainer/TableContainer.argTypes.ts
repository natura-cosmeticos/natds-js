import { ArgType } from "@storybook/addons";
import { ITableContainerProps } from "./TableContainer.props";
import { objectArgType } from "../../../../.storybook/argTypes/objectArgType";

export const argTypes : Record<keyof ITableContainerProps | string, ArgType> = {
  children: {
    description: "The table itself, normally `Table`.",
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
      type: { summary: "\"div\"" },
    },
  },
};

export default argTypes;
