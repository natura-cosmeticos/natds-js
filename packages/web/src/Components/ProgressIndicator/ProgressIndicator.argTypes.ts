/* eslint-disable no-magic-numbers */
export const argTypes = {
  className: {
    control: { type: null },
    description: "Override or extend the styles applied to the component.",
    table: { type: { summary: "object" } },
  },
  size: {
    control: {
      type: "select",
      options: [24, 32, 48, 64],
    },
    description: "The size of the circle.",
    table: { type: { summary: "number" } },
  },
};

export default argTypes;
