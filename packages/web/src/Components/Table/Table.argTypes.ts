import { ArgType } from "@storybook/addons";
import { ITableProps } from "./Table.props";
import { objectArgType } from "../../../.storybook/argTypes/objectArgType";
import { booleanArgType } from "../../../.storybook/argTypes/booleanArgType";
import { tablePaddingArgType } from "../../../.storybook/argTypes/tablePaddingArgType";
import { tableCellSizeArgType } from "../../../.storybook/argTypes/tableCellSizeArgType";
import { stringArgType } from "../../../.storybook/argTypes/stringArgType";

export const argTypes : Record<keyof ITableProps | string, ArgType> = {
  "aria-label": {
    ...stringArgType,
    description: "Defines a string value that labels the current element.",
  },
  children: {
    description: "The content of the table, normally `TableHead` and `TableBody`.",
    table: { type: { summary: "node" } },
  },
  classes: {
    ...objectArgType,
    description: "Override or extend the styles applied to the component. See CSS API below for more details.",
  },
  component: {
    description: "The component used for the root node. Either a string to use a DOM element or a component.",
    table: {
      defaultValue: { summary: "\"table\"" },
      type: { summary: "elementType" },
    },
  },
  dividers: {
    ...booleanArgType,
    table: {
      ...booleanArgType.stickyHeader,
      defaultValue: { summary: true },
    },
  },
  padding: {
    ...tablePaddingArgType,
    description: "Allows `TableCell`s to inherit padding of the `Table`.",
  },
  rounded: {
    ...booleanArgType,
    table: {
      ...booleanArgType.stickyHeader,
      defaultValue: { summary: true },
    },
  },
  size: {
    ...tableCellSizeArgType,
    description: "Allows TableCells to inherit size of the Table.",
  },
  stickyHeader: {
    ...booleanArgType,
    description: "Set the header sticky. ⚠️ It doesn't work with IE 11.",
    table: {
      ...booleanArgType.stickyHeader,
      defaultValue: { summary: false },
    },
  },
  striped: {
    ...booleanArgType,
    table: {
      ...booleanArgType.stickyHeader,
      defaultValue: { summary: true },
    },
  },
};

export default argTypes;
