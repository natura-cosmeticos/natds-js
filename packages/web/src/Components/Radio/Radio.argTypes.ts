import { ArgType } from "@storybook/addons";
import { IRadioProps } from "./Radio.props";
import { booleanArgType } from "../../../.storybook/argTypes/booleanArgType";
import { objectArgType } from "../../../.storybook/argTypes/objectArgType";
import { colors } from "./__fixtures__/colors";
import { stringArgType } from "../../../.storybook/argTypes/stringArgType";
import sizes from "./__fixtures__/sizes";
import edges from "./__fixtures__/edges";

export const argTypes : Record<keyof IRadioProps | string, ArgType> = {
  checked: booleanArgType,
  checkedIcon: {},
  classes: objectArgType,
  color: { options: colors, type: "radio" },
  disabled: booleanArgType,
  disableRipple: booleanArgType,
  icon: {},
  id: stringArgType,
  inputProps: objectArgType,
  inputRef: {},
  name: stringArgType,
  onChange: {},
  required: booleanArgType,
  size: { options: sizes, type: "radio" },
  value: {},
  action: {},
  centerRipple: booleanArgType,
  disableFocusRipple: booleanArgType,
  disableTouchRipple: booleanArgType,
  edge: {
    control: {
      options: edges,
      type: "radio",
    },
  },
  focusRipple: booleanArgType,
  focusVisibleClassName: stringArgType,
  onFocusVisible: {},
  TouchRippleProps: {},
};

export default argTypes;
