/* eslint-disable no-magic-numbers */
export const argTypes = {
  children: {
    description: "The content of the component.",
    table: { type: { summary: "node" } },
  },
  className: {
    control: {
      type: "text",
    },
  },
  elevation: {
    control: {
      type: "inline-radio",
      options: [0, 1],
    },
    description: "Shadow depth, corresponds to dp in the spec.",
    table: {
      type: { summary: "number" },
    },
  },
  square: {
    description: "If `true`, rounded corners are disabled.",
    table: {
      defaultValue: { summary: false },
      type: { summary: "bool" },
    },
  },
};

export default argTypes;
