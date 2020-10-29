import { ArgType } from "@storybook/addons";

export const objectArgType : ArgType = {
  control: { type: "object" },
  table: {
    type: { summary: "object" },
  },
  type: { name: "object", required: false },
};

export default objectArgType;
