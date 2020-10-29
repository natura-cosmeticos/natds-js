import { ArgType } from "@storybook/addons";

export const tablePaddingArgType : ArgType = {
  control: {
    options: [
      "default",
      "checkbox",
      "none",
    ],
    type: "inline-radio",
  },
  table: {
    defaultValue: { summary: "\"default\"" },
    type: { summary: "\"default\" | \"checkbox\" | \"none\"" },
  },
};

export default tablePaddingArgType;
