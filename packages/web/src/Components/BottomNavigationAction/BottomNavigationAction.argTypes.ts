import { ArgType } from "@storybook/addons";
import { IBottomNavigationActionProps } from "./BottomNavigationAction.props";
import { objectArgType } from "../../../.storybook/argTypes/objectArgType";
import { booleanArgType } from "../../../.storybook/argTypes/booleanArgType";

export const argTypes : Record<keyof IBottomNavigationActionProps | string, ArgType> = {
  children: {
    control: { type: null },
    table: {
      type: { summary: "unsupportedProp" },
    },
  },
  classes: {
    ...objectArgType,
    description: "Override or extend the styles applied to the component. See CSS API for more details.",
  },
  icon: {
    description: "The `Icon` element.",
    table: {
      type: { summary: "node" },
    },
  },
  label: {
    description: "The label element.",
    table: {
      type: { summary: "node" },
    },
  },
  showLabel: {
    ...booleanArgType,
  },
  value: {},
};

export default argTypes;
