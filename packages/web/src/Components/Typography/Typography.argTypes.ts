import { ITypographyProps } from "./Typography.props";

export const argTypes : Record<keyof ITypographyProps | string, unknown> = {
  align: {
    defaultValue: "inherit",
  },
  children: {
    control: {
      type: "text",
    },
    defaultValue: "Text",
    name: "children",
    type: {
      required: true,
    },
  },
  classes: {
    control: {
      type: "text",
    },
    defaultValue: "",
    name: "classes",
    type: {
      required: false,
    },
  },
  color: {
    name: "color",
    type: {
      required: false,
    },
  },
  component: {
    control: {
      type: "text",
    },
  },
  gutterBottom: {
    control: {
      type: "boolean",
    },
    defaultValue: false,
    description: "If `true`, the text will have a bottom margin.",
    name: "gutterBottom",
  },
  noWrap: {
    control: {
      type: "boolean",
    },
    defaultValue: false,
    name: "noWrap",
  },
  paragraph: {
    control: {
      type: "boolean",
    },
    defaultValue: false,
  },
  variant: {
    defaultValue: "body1",
  },
  variantMapping: {
    control: {
      type: "object",
    },
  },
};

export default argTypes;
