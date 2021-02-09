/* eslint-disable no-magic-numbers */
export const argTypes = {
  className: {
    control: { type: null },
    description: "Override or extend the styles applied to the component.",
    table: { type: { summary: "object" } },
  },
  color: {
    control: {
      type: "select",
      options: ["primary", "secondary", "inherit"],
    },
    description:
      "The color of the component. It supports those theme colors that make sense for this component.",
  },
  size: {
    control: {
      type: "select",
      options: [24, 32, 40, 48],
    },
    description: "The size of the circle.",
    table: { type: { summary: "number" } },
  },
  disableShrink: {
    table: {
      defaultValue: { summary: false },
      type: { summary: "bool" },
    },
    description: "If true, the shrink animation is disabled.",
  },
};

export default argTypes;
