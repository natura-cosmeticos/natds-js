import { ArgType } from "@storybook/addons";
import { IMenuItemProps } from "./MenuItem.props";

export const argTypes : Record<keyof IMenuItemProps | string, ArgType> = {
  children: {
    description: "Menu item contents.",
    table: {
      type: { summary: "node" },
    },
  },
  classes: {
    control: { type: "object" },
    description: `
Override or extend the styles applied to the component.

See the [CSS API](https://material-ui.com/api/menu-item/#css) for more details.
`,
    table: {
      type: { summary: "object" },
    },
    type: { name: "object", required: false },
  },
  component: {
    description: "The component used for the root node. Either a string to use a DOM element or a component.",
    table: {
      defaultValue: { summary: "\"li\"" },
      type: { summary: "elementType" },
    },
  },
  dense: {
    control: { type: "boolean" },
    description: "If true, compact vertical padding designed for keyboard and mouse input will be used.",
    table: {
      type: { summary: "bool" },
    },
    type: { name: "boolean", required: false },
  },
  disableGutters: {
    control: { type: "boolean" },
    description: "If `true`, the left and right padding is removed.",
    table: {
      defaultValue: { summary: false },
      type: { summary: "bool" },
    },
    type: { name: "boolean", required: false },
  },
};
export default argTypes;
