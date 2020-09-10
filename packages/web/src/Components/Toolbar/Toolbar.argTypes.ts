import { IToolbarProps } from "./Toolbar.props";

export const argTypes : Record<keyof IToolbarProps | string, unknown> = {
  children: {
    description: "Toolbar children, usually a mixture of IconButton, Button and Typography.",
    table: {
      type: {
        summary: "node",
      },
    },
  },
  classes: {
    description: "Override or extend the styles applied to the component. Check CSS API for more details.",
    table: {
      type: {
        summary: "object",
      },
    },
  },
  component: {
    control: { type: "text" },
    description: "The component used for the root node. Either a string to use a DOM element or a component.",
    name: "component",
    table: {
      defaultValue: {
        summary: "div",
      },
      type: {
        summary: "elementType",
      },
    },
  },
  disableGutters: {
    defaultValue: false,
    description: "If `true`, disables gutter padding.",
    table: {
      defaultValue: {
        summary: false,
      },
    },
    type: "boolean",
  },
  variant: {
    table: {
      defaultValue: {
        summary: "regular",
      },
    },
    control: {
      type: "inline-radio",
      options: ["regular",
        "dense",
        "prominent"],
    },
  },
};

export default argTypes;
