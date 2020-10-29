import { ArgType } from "@storybook/addons";
import { IBottomNavigationProps } from "./BottomNavigation.props";
import { objectArgType } from "../../../.storybook/argTypes/objectArgType";
import { booleanArgType } from "../../../.storybook/argTypes/booleanArgType";

export const argTypes : Record<keyof IBottomNavigationProps | string, ArgType> = {
  children: {},
  classes: {
    ...objectArgType,
    description: "Override or extend the styles applied to the component. See CSS API for more details.",
  },
  component: {
    description: "The component used for the root node. Either a string to use a DOM element or a component.",
    table: {
      defaultValue: { summary: "\"div\"" },
      type: { summary: "elementType" },
    },
  },
  onChange: {},
  showLabels: {
    ...booleanArgType,
  },
  value: {},
};

export default argTypes;
