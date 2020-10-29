import { ArgType } from "@storybook/addons";
import { ITableSortLabelProps } from "./TableSortLabel.props";

export const argTypes : Record<keyof ITableSortLabelProps | string, ArgType> = {
  active: {
    control: { type: "boolean" },
    description: "If `true`, the label will have the active styling (should be `true` for the sorted column).",
    table: {
      defaultValue: { summary: false },
      type: { summary: "bool" },
    },
    type: { name: "boolean", required: true },
  },
  children: {
    control: { type: "text" },
    description: "Label contents, the arrow will be appended automatically.",
    table: {
      type: { summary: "node" },
    },
  },
  classes: {
    control: { type: "object" },
    description: "Override or extend the styles applied to the component. See CSS API below for more details.",
    table: {
      type: { summary: "object" },
    },
    type: { name: "object", required: false },
  },
  direction: {
    control: { options: ["asc", "desc"], type: "inline-radio" },
    description: "The current sort direction.",
    table: {
      defaultValue: { summary: "\"asc\"" },
    },
  },
  hideSortIcon: {
    control: { type: "boolean" },
    description: "Hide sort icon when active is `false`.",
    table: {
      defaultValue: { summary: false },
      type: { summary: "bool" },
    },
    type: { name: "boolean", required: false },
  },
  IconComponent: {
    description: "Sort icon to use.",
    table: {
      defaultValue: { summary: "ArrowDownwardIcon" },
      type: { summary: "elementType" },
    },
  },
  action: {},
  centerRipple: {
    control: { type: "boolean" },
    type: { name: "boolean", required: false },
  },
  disabled: {
    control: { type: "boolean" },
    description: "If `true`, the sort button will be disabled.",
    table: {
      defaultValue: { summary: false },
      type: { summary: "bool" },
    },
  },
  disableRipple: {
    control: { type: "boolean" },
    type: { name: "boolean", required: false },
  },
  disableTouchRipple: {
    control: { type: "boolean" },
    type: { name: "boolean", required: false },
  },
  focusRipple: {
    control: { type: "boolean" },
    type: { name: "boolean", required: false },
  },
  focusVisibleClassName: {
    control: { type: "text" },
    type: { name: "string", required: false },
  },
  onClick: {},
  onFocusVisible: {},
  tabIndex: {
    // eslint-disable-next-line no-magic-numbers
    control: { options: [0, -1], type: "inline-radio" },
    description: `
Specify if table sort label will be focusable, or if it will be removed from the tab order.

Table sort labels that have a \`tabIndex\` of \`0\` can be reached by keyboard-only users.<br />
The element can be focused by pressing the \`Tab\` key or programmatically.

When \`tabIndex\` is \`-1\`, removes the table sort label, but the element can still be focused programmatically.
`,
    table: {
      defaultValue: { summary: "\"0\"" },
    },
    type: { name: "number", required: false },
  },
};

export default argTypes;
