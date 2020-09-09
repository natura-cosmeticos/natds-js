import { IBadgeProps } from "./Badge.props";
import { anchorOrigins } from "./__fixtures__/anchorOrigins";
import colors from "./__fixtures__/colors";
import overlaps from "./__fixtures__/overlaps";
import variants from "./__fixtures__/variants";

export const argTypes : Record<keyof IBadgeProps | string, unknown> = {
  anchorOrigin: {
    control: {
      options: anchorOrigins,
      type: "select",
    },
    table: {
      defaultValue: {
        summary: "{ horizontal: \"right\", vertical: \"top\" }",
      },
      type: {
        summary: "{ horizontal: \"left\" | \"right\", vertical: \"bottom\" | \"top\" }",
      },
    },
  },
  badgeContent: {},
  children: {},
  color: {
    control: {
      options: colors,
      type: "inline-radio",
    },
    table: {
      defaultValue: {
        summary: colors.default,
      },
    },
  },
  component: {
    description: "The component used for the root node. Either a string to use a DOM element or a component.",
    table: {
      defaultValue: {
        summary: "span",
      },
      type: {
        summary: "elementType",
      },
    },
  },
  invisible: {
    control: {
      type: "boolean",
    },
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
  max: {
    control: {
      type: "number",
    },
    table: {
      defaultValue: {
        summary: 99,
      },
    },
  },
  overlap: {
    control: {
      options: overlaps,
      type: "inline-radio",
    },
    table: {
      defaultValue: {
        summary: overlaps.rectangle,
      },
    },
  },
  showZero: {
    control: {
      type: "boolean",
    },
    table: {
      defaultValue: {
        summary: false,
      },
    },
  },
  variant: {
    control: {
      options: variants,
      type: "inline-radio",
    },
    table: {
      defaultValue: {
        summary: variants.standard,
      },
    },
  },
};
