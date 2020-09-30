import { ArgType } from "@storybook/addons";
import { ITableProps } from "./Table.props";

export const argTypes : Record<keyof ITableProps | string, ArgType> = {
  "aria-label": {
    control: { type: "text" },
    description: "Defines a string value that labels the current element.",
    table: { type: { summary: "string" } },
  },
};

export default argTypes;
