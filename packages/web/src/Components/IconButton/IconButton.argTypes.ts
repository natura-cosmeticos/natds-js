import { IIconButtonProps } from "./IconButton.props";
import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";

export const argTypes : Record<keyof IIconButtonProps | string, unknown> = {
  children: {
    description: "The content of the component. Usually, the icon element.",
    table: {
      type: {
        summary: "node",
      },
    },
  },
  classes: {
    control: {
      type: "object",
    },
    description: "Override or extend the styles applied to the component.",
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
    description: "The color of the component. It supports those theme colors that make sense for this component.",
    table: {
      defaultValue: {
        summary: "default",
      },
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
    description: "If true, the `IconButton` base button will be disabled.",
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
  disableFocusRipple: {
    control: {
      type: "boolean",
    },
    description: "If true, the keyboard focus ripple will be disabled. `disableRipple` must also be `true`.",
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
  disableRipple: {
    control: {
      type: "boolean",
    },
  },
  edge: {
    control: {
      options: [
        "start",
        "end",
        false,
      ],
      type: "inline-radio",
    },
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
  size: {
    control: {
      options: sizes,
      type: "inline-radio",
    },
    description: "The size of the `IconButton`. `small` is equivalent to the dense `IconButton` styling.",
    table: {
      defaultValue: {
        summary: "medium",
      },
    },
  },
};
