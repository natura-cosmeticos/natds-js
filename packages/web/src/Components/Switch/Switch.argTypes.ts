import { ArgType } from "@storybook/addons";
import { ISwitchProps } from "./Switch.props";
import { colors } from "./__fixtures__/colors";
import { booleanArgType } from "../../../.storybook/argTypes/booleanArgType";
import { objectArgType } from "../../../.storybook/argTypes/objectArgType";
import { edges } from "./__fixtures__/edges";
import { sizes } from "./__fixtures__/sizes";
import { stringArgType } from "../../../.storybook/argTypes/stringArgType";

export const argTypes : Record<keyof ISwitchProps | string, ArgType> = {
  checked: booleanArgType,
  checkedIcon: {},
  classes: objectArgType,
  color: {
    control: { options: colors, type: "radio" },
    table: {
      defaultValue: { summary: `"${colors.secondary}"` },
    },
  },
  disabled: {
    ...booleanArgType,
    table: {
      ...booleanArgType.table,
      defaultValue: { summary: false },
    },
  },
  disableRipple: booleanArgType,
  edge: {
    control: { options: edges, type: "radio" },
  },
  icon: {},
  id: stringArgType,
  inputProps: objectArgType,
  inputRef: {},
  onChange: {},
  required: booleanArgType,
  size: {
    control: { options: sizes, type: "radio" },
  },
  type: stringArgType,
  value: {},
  action: {},
  centerRipple: booleanArgType,
  disableFocusRipple: booleanArgType,
  disableTouchRipple: booleanArgType,
  focusRipple: booleanArgType,
  focusVisibleClassName: stringArgType,
  onFocusVisible: {},
  TouchRippleProps: objectArgType,
};

export default argTypes;
