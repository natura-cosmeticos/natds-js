import { ArgType } from "@storybook/addons";

export const tableCellSizeArgType : ArgType = {
  control: {
    options: ["small", "medium"],
  },
  table: {
    defaultValue: { summary: "\"medium\"" },
    type: { summary: "\"small\" | \"medium\"" },
  },
};

export default tableCellSizeArgType;
