import { ArgType } from "@storybook/addons";

export const stringArgType : ArgType = {
  control: { type: "text" },
  table: {
    type: { summary: "string" },
  },
  type: { name: "string" },
};

export default stringArgType;
