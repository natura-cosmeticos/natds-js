import { ArgType } from "@storybook/addons";

export const textArgType : ArgType = {
  control: { type: "text" },
  table: {
    type: { summary: "string" },
  },
  type: { name: "string" },
};

export default textArgType;
