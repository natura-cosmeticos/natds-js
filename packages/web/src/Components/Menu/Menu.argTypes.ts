/* eslint-disable max-lines */
import { ArgType } from "@storybook/addons";
import { IMenuProps } from "./Menu.props";
import { actionArgTypes } from "./Menu.action.argTypes";
import { variants } from "./__fixtures__/variants";

export const argTypes : Record<keyof IMenuProps | string, ArgType> = {
  anchorEl: {
    description: "The DOM element used to set the position of the menu.",
    table: {
      type: { summary: "object | func" },
    },
  },
  autoFocus: {
    control: { type: "boolean" },
    description: `
If \`true\` (Default) will focus the \`[role="menu"]\` if no focusable child is found.
Disabled children are not focusable.

If you set this prop to \`false\`, focus will be placed on the parent modal container.
This has severe accessibility implications and should only be considered if you manage focus otherwise.
 `,
    table: {
      defaultValue: { summary: true },
      type: { summary: "bool" },
    },
    type: { name: "boolean", required: false },
  },
  children: {
    description: "Menu contents, normally `MenuItem`s.",
    table: {
      type: { summary: "node" },
    },
  },
  classes: {
    description: `
Override or extend the styles applied to the component.<br />
See the [CSS API](https://material-ui.com/api/menu/#css) for more details.
`,
    table: {
      type: { summary: "object" },
    },
    type: { name: "object", required: false },
  },
  disableAutoFocusItem: {
    control: { type: "boolean" },
    description: `
When opening the menu will not focus the active item but the \`[role="menu"]\` unless autoFocus is also set to \`false\`

Not using the default means not following WAI-ARIA authoring practices.

Please be considerate about possible accessibility implications.
`,
    table: {
      defaultValue: { summary: false },
      type: { summary: "bool" },
    },
    type: { name: "boolean", required: false },
  },
  keepMounted: {
    control: { type: "boolean" },
    description: `
Always keep the children in the DOM.

This prop can be useful in SEO situation or when you want to maximize the responsiveness of the Popper.
`,
    table: {
      defaultValue: { summary: false },
      type: { summary: "bool" },
    },
    type: { name: "boolean", required: false },
  },
  MenuListProps: {
    control: { type: "object" },
    description: "Props applied to the `MenuList` element.",
    table: {
      defaultValue: { summary: "{}" },
      type: { summary: "object" },
    },
    type: { name: "object", required: false },
  },
  ...actionArgTypes,
  open: {
    control: { type: "boolean" },
    defaultValue: false,
    description: "If `true`, the menu is visible.",
    table: {
      defaultValue: { summary: false },
      type: { summary: "bool" },
    },
    type: { name: "boolean", required: true },
  },
  PopoverClasses: {
    control: { type: "object" },
    description: "`classes` prop applied to the Popover element.",
    table: {
      type: { summary: "object" },
    },
    type: { name: "object", required: false },
  },
  transitionDuration: {
    description: "The length of the transition in ms, or `\"auto\"`",
    table: {
      defaultValue: { summary: "auto" },
      type: {
        detail: "'auto' | number | { appear?: number, enter?: number, exit?: number }",
        summary: "'auto' | number | { appear, enter, exit }",
      },
    },
  },
  variant: {
    control: {
      options: variants,
      type: "inline-radio",
    },
    description: `
The variant to use.

Use \`menu\` to prevent selected items from impacting the initial focus
and the vertical alignment relative to the anchor element.
`,
    table: {
      defaultValue: { summary: "\"selectedMenu\"" },
      type: { summary: "\"menu\" | \"selectedMenu\"" },
    },
  },
};

export default argTypes;
