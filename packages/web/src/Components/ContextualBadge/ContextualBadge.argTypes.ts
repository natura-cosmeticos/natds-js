import { ArgType } from "@storybook/addons";
import { IContextualBadgeProps } from "./ContextualBadge.props";
import { colors } from "./__fixtures__/colors";
import { types } from "./__fixtures__/types";

export const argTypes : Record<keyof IContextualBadgeProps, ArgType> = {
  classes: {
    control: { type: "text" },
    description: "The classes to use on the container 'div'",
    table: {
      type: { summary: "string" },
    },
    type: { name: "string", required: false },
  },
  children: {
    description: "The children that will be placed inside the badge",
    table: {
      type: { summary: "React.ReactNode" },
    },
  },
  color: {
    control: {
      options: colors,
      type: "select",
    },
    description: "Color of the ContextualBadge to use from the theme.",
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
  type: {
    control: {
      options: types,
      type: "inline-radio",
    },
    description: "The type of the badge",
    table: {
      defaultValue: { summary: "\"standard\"" },
    },
  },
};

export default argTypes;
