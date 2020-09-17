import variants from "./__fixtures__/variants";

export const argTypes = {
  children: {
    description: "The content of the component.",
    table: {
      type: {
        summary: "node",
      },
    },
  },
  classes: {
    description: "Override or extend the styles applied to the component. Check [CSS API](https://material-ui.com/pt/api/switch/#css) for more details.",
    table: {
      type: {
        summary: "object",
      },
    },
  },
  component: {
    description: "The component used for the root node. Either a string to use a DOM element or a component.",
    table: {
      defaultValue: {
        summary: "div",
      },
      type: {
        summary: "elementType",
      },
    },
  },
  elevation: {
    control: {
      max: 24,
      min: 0,
      step: 1,
      type: "range",
    },
    description: "Shadow depth, corresponds to dp in the spec. It accepts values between `0` and `24` inclusive.",
    table: {
      type: {
        summary: "number",
      },
    },
  },
  square: {
    description: "If true, rounded corners are disabled.",
    table: {
      defaultValue: {
        summary: false,
      },
      type: {
        summary: "bool",
      },
    },
  },
  variant: {
    control: {
      options: variants,
      type: "inline-radio",
    },
    description: "The variant to use.",
    table: {
      defaultValue: {
        summary: variants.elevation,
      },
      type: {
        summary: "'elevation' | 'outlined'",
      },
    },
  },
};

export default argTypes;
