import { ArgType } from "@storybook/addons";

export const booleanArgType : ArgType = {
  control: { type: "boolean" },
  table: {
    type: { summary: "bool" },
  },
  type: { name: "boolean", required: false },
};

export default booleanArgType;
