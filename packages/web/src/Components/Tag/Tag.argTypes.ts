import { ArgType } from "@storybook/addons";
import { ITagProps } from "./Tag.props";
import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";
import { positions } from "./__fixtures__/positions";

export const argTypes : Record<keyof ITagProps, ArgType> = {
  classes: {
    control: { type: "text" },
    description: "The classes to use on the container 'div'",
    table: {
      type: { summary: "string" },
    },
    type: { name: "string", required: false },
  },
  children: {
    description: "The children that will be placed inside the tag",
    table: {
      type: { summary: "React.ReactNode" },
    },
  },
  color: {
    control: {
      options: colors,
      type: "select",
    },
    description: "Color of the Tag to use from the theme.",
    table: {
      defaultValue: { summary: "\"primary\"" },
      type: { summary: "'primary' \\| 'secondary' \\| 'info' \\| 'error' \\| 'warning' \\| 'success' \\| 'light' \\| 'dark'" },
    },
  },
  id: {
    control: { type: "text" },
    description: "The input id property",
    table: {
      type: { summary: "string" },
    },
    type: { name: "string", required: true },
  },
  style: {
    control: { type: "object" },
    description: "Inline style for the container 'div'",
    table: {
      type: { summary: "React.CSSProperties" },
    },
    type: { name: "object", required: false },
  },
  size: {
    control: {
      options: sizes,
      type: "inline-radio",
    },
    description: "The size of the Tag",
    table: {
      defaultValue: { summary: "\"small\"" },
    },
  },
  position: {
    control: {
      options: positions,
      type: "inline-radio",
    },
    description: "The position of the Tag",
    table: {
      defaultValue: { summary: "\"default\"" },
    },
  },
};

export default argTypes;
