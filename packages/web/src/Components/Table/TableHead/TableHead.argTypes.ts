import { ArgType } from "@storybook/addons";
import { ITableHeadProps } from "./TableHead.props";

export const argTypes : Record<keyof ITableHeadProps | string, ArgType> = {
  children: {
    table: {
      type: { summary: "node" },
    },
  },
};

export default argTypes;
