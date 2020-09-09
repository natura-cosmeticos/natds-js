import { IButtonProps } from "./Button";
import { colors } from "./__fixtures__/colors";
import sizes from "./__fixtures__/sizes";
import variants from "./__fixtures__/variants";

const booleanControl = {
  control: {
    type: "boolean",
  },
};

export const argTypes : Record<keyof IButtonProps | string, unknown> = {
  children: {
    control: {
      type: "text",
    },
    table: {
      type: {
        summary: "node",
      },
    },
  },
  classes: {
    description: `
Override or extend the styles applied to the component.<br />
See [Material Button CSS API](https://material-ui.com/api/button/#css) for more details.
`,
    table: {
      type: {
        summary: "object",
      },
    },
  },
  color: {
    control: {
      options: colors,
      type: "inline-radio",
    },
    table: {
      defaultValue: {
        summary: "default",
      },
    },
  },
  component: {
    description: "The component used for the root node. Either a string to use a DOM element or a component.",
    table: {
      defaultValue: {
        summary: "button",
      },
      type: {
        summary: "elementType",
      },
    },
  },
  disabled: {
    ...booleanControl,
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
  disableFocusRipple: {
    ...booleanControl,
    description: "If true, the keyboard focus ripple will be disabled. `disableRipple` must also be `true`.",
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
  disableRipple: booleanControl,
  endIcon: {},
  fullWidth: {
    ...booleanControl,
    table: {
      type: {
        summary: false,
      },
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
  startIcon: {},
  variant: {
    control: {
      options: variants,
      type: "inline-radio",
    },
  },
};
