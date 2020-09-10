import { FabProps } from "@material-ui/core";
import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";
import { variants } from "./__fixtures__/variants";

export const argTypes : Record<keyof FabProps | string, unknown> = {
  children: {
    control: {
      type: null,
    },
  },
  color: {
    control: {
      options: colors,
      type: "inline-radio",
    },
  },
  href: {
    control: {
      type: "text",
    },
  },
  size: {
    control: {
      options: sizes,
      type: "inline-radio",
    },
  },
  variant: {
    control: {
      options: variants,
      type: "inline-radio",
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: `
\`disabled\` property was deprecated since version 0.19 and will be removed at 1.0.

The FAB promotes action, and should not be displayed in a disabled state.
If you want to present a FAB that does not perform an action, you should also present an explanation to the user.
`,
  },
};

export default argTypes;
