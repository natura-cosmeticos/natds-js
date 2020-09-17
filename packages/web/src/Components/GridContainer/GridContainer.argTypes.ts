export const argTypes = {
  alignContent: {
    description: "Defines the `align-content` style property. It's applied for all screen sizes.",
    table: {
      defaultValue: {
        summary: "stretch",
      },
    },
  },
  alignItems: {
    description: "Defines the `align-items` style property. It's applied for all screen sizes.",
    table: {
      defaultValue: {
        summary: "stretch",
      },
    },
  },
  children: {
    description: "The content of the component.",
    table: {
      type: {
        summary: "node",
      },
    },
  },
  classes: {
    description: `
Override or extend the styles applied to the component.
See [CSS API](https://material-ui.com/api/grid/#css) below for more details.
`,
    table: {
      type: {
        summary: "object",
      },
    },
  },
  component: {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    table: {
      defaultValue: {
        summary: "div",
      },
      type: {
        summary: "elementType",
      },
    },
  },
  direction: {
    description: "Defines the `flex-direction` style property. It is applied for all screen sizes.",
  },
  justify: {
    description: "Defines the `justify-content` style property. It is applied for all screen sizes.",
  },
  spacing: {
    control: {
      max: 10,
      min: 0,
      step: 1,
      type: "range",
    },
    description: "Defines the space between the `GridItem` component.",
    table: {
      defaultValue: {
        summary: 0,
      },
    },
    type: {
      required: false,
    },
  },
  wrap: {
    description: "Defines the `flex-wrap` style property. It's applied for all screen sizes.",
    table: {
      defaultValue: {
        summary: "wrap",
      },
    },
  },
  zeroMinWidth: {
    control: {
      type: "boolean",
    },
    description: `
If \`true\`, it sets \`min-width: 0\` on the item.
Refer to the limitations section of the documentation to better understand the use case.
`,
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
};

export default argTypes;
