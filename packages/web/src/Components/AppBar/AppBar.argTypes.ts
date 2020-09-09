import { IAppBarProps } from "./AppBar.props";
import { colors } from "./__fixtures__/colors";
import { positions } from "./__fixtures__/positions";

export const argTypes : Record<keyof IAppBarProps | string, unknown> = {
  children: {
    control: {
      type: "text",
    },
    description: "The content of the component.",
    name: "children",
    table: {
      type: {
        summary: "node",
      },
    },
  },
  classes: {
    description: "Override or extend the styles applied to the component. See CSS API for more details.",
    table: {
      type: {
        summary: "object",
      },
    },
    type: {
      name: "object",
      required: false,
    },
  },
  color: {
    control: {
      options: colors,
      type: "inline-radio",
    },
    description: "The color of the component. It supports those theme colors that make sense for this component.",
    table: {
      type: {
        summary: "'default' | 'inherit' | 'primary' | 'secondary'",
      },
    },
  },
  position: {
    control: {
      options: positions,
      type: "select",
    },
    description: `
The positioning type. The behavior of the different options is described in the MDN web docs.

Note: sticky is not universally supported and will fall back to static when unavailable.`,
    table: {
      type: {
        summary: "'absolute' | 'fixed' | 'relative' | 'static' | 'sticky' | 'fixed'",
      },
    },
  },
};
