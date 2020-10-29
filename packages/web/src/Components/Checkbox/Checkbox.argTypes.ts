import { ArgType } from "@storybook/addons";
import { ICheckboxProps } from "./Checkbox.props";
import { colors } from "./__fixtures__/colors";
import { booleanArgType } from "../../../.storybook/argTypes/booleanArgType";
import { objectArgType } from "../../../.storybook/argTypes/objectArgType";

const argTypes : Record<keyof ICheckboxProps | string, ArgType> = {
  checked: {
    ...booleanArgType,
    description: "If `true`, the component is checked.",
  },
  checkedIcon: {
    description: "The icon to display when the component is checked.",
    table: { type: { summary: "node" } },
  },
  classes: {
    ...objectArgType,
    description: "Override or extend the styles applied to the component. See [CSS API](https://material-ui.com/pt/api/switch/#css) for more details.",
  },
  color: {
    control: { options: colors, type: "inline-radio" },
    description: "The color of the component. It supports those theme colors that make sense for this component.",
    table: {
      defaultValue: { summary: "\"secondary\"" },
      type: { summary: "\"primary\" | \"secondary\" | \"default\"" },
    },
  },
  disabled: {
    ...booleanArgType,
    description: "If `true`, the checkbox will be disabled.",
  },
  disableRipple: {
    ...booleanArgType,
    description: "If `true`, the ripple effect will be disabled.",
  },
  icon: {
    description: "The icon to display when the component is unchecked.",
    table: { type: { summary: "node" } },
  },
  id: {
    control: { type: "text" },
    description: "The id of the input element.",
    table: { type: { summary: "string" } },
    type: { name: "string", required: false },
  },
  indeterminate: {
    ...booleanArgType,
    description: `
If \`true\`, the component appears indeterminate.

This does not set the native input element to indeterminate due to inconsistent behavior across browsers.
However, we set a \`data-indeterminate\` attribute on the input.
`,
    table: {
      ...booleanArgType.table,
      defaultValue: { summary: false },
    },
  },
  indeterminateIcon: {
    description: "The icon to display when the component is indeterminate.",
    table: {
      defaultValue: { summary: "<IndeterminateCheckBoxIcon />" },
      type: { summary: "node" },
    },
  },
  inputProps: {
    ...objectArgType,
    description: "[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the input element.",
  },
  inputRef: {
    description: "Pass a `ref` to the `input` element.",
    table: { type: { summary: "ref" } },
  },
  onChange: {
    description: "Callback fired when state changes",
    table: {
      type: { summary: "func", detail: "function(event: object) => void" },
    },
  },
  required: {
    ...booleanArgType,
    description: "If `true`, the `input` element will be required.",
  },
  type: {
    control: { type: "text" },
    description: "The `input` component prop type.",
    table: {
      type: { summary: "string" },
    },
    type: { name: "string" },
  },
  value: {
    description: "The value of the component. The DOM API casts this to a `string`.",
    table: {
      type: { summary: "any" },
    },
  },
};

export default argTypes;
