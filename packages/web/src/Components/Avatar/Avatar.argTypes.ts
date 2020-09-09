import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";
import { IAvatarProps } from "./Avatar.props";

export const argTypes : Record<keyof IAvatarProps | string, unknown> = {
  alt: {
    control: {
      type: "text",
    },
  },
  children: {
    control: {
      type: "object",
    },
  },
  color: {
    control: {
      options: colors,
      type: "inline-radio",
    },
    defaultValue: colors.default,
  },
  component: {
    control: {
      type: "text",
    },
    description: "The component used for the root node. Either a `string` to use a DOM element or a component.",
    table: {
      defaultValue: {
        summary: "\"div\"",
      },
      type: {
        summary: "elementType",
      },
    },
  },
  imgProps: {
    control: {
      type: "object",
    },
  },
  size: {
    control: {
      options: sizes,
      type: "select",
    },
    defaultValue: sizes.standard,
  },
  src: {
    control: {
      type: "text",
    },
  },
  srcSet: {
    control: {
      type: "text",
    },
  },
  sizes: {
    control: {
      type: "text",
    },
  },

  /**
   * @deprecated `variant` property is deprecated since version 0.19.
   * It will be removed at 1.0. All Avatar variations will be internally `circle` by default.
   */
  variant: {
    control: {
      options: ["circle"],
      type: "inline-radio",
    },
    table: {
      defaultValue: {
        summary: "\"circle\"",
      },
    },
  },
};

export default argTypes;
