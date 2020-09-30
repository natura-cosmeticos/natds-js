import { ArgType } from "@storybook/addons";
import { ITypographyProps } from "./Typography.props";
import { aligns } from "./__fixtures__/aligns";
import { displays } from "./__fixtures__/displays";
import { colors } from "./__fixtures__/colors";
import { variants } from "./__fixtures__/variants";

const defaultFalseTable = {
  defaultValue: {
    summary: false,
  },
};

export const argTypes : Record<keyof ITypographyProps | string, ArgType> = {
  align: {
    control: {
      options: aligns,
      type: "select",
    },
    table: {
      defaultValue: {
        summary: "\"inherit\"",
      },
    },
  },
  children: {
    control: {
      type: "text",
    },
    name: "children",
  },
  classes: {
    control: {
      type: "text",
    },
    name: "classes",
  },
  color: {
    control: {
      options: colors,
      type: "select",
    },
    name: "color",
    table: {
      defaultValue: {
        summary: "initial",
      },
    },
  },
  component: {
    control: {
      type: "text",
    },
  },
  display: {
    control: {
      options: displays,
      type: "inline-radio",
    },
    description: "Controls the display type",
    table: {
      defaultValue: {
        summary: "\"initial\"",
      },
    },
  },
  gutterBottom: {
    control: {
      type: "boolean",
    },
    description: "If `true`, the text will have a bottom margin.",
    name: "gutterBottom",
    table: defaultFalseTable,
  },
  noWrap: {
    control: {
      type: "boolean",
    },
    name: "noWrap",
    table: defaultFalseTable,
  },
  paragraph: {
    control: {
      type: "boolean",
    },
    table: defaultFalseTable,
  },
  variant: {
    control: {
      options: variants,
      type: "select",
    },
    table: {
      defaultValue: {
        summary: "body1",
      },
    },
  },
  variantMapping: {},
};

export default argTypes;
