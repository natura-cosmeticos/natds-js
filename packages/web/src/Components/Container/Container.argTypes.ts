import { ArgType } from "@storybook/addons";
import { IContainerProps } from "./Container.props";
import maxWidths from "./__fixtures__/maxWidths";

export const argTypes : Record<keyof IContainerProps | string, ArgType> = {
  children: {
    description: "The content of the component. The children to render into the `Container`.",
    table: {
      type: {
        summary: "node",
      },
    },
  },
  component: {
    table: {
      defaultValue: {
        summary: "\"div\"",
      },
      type: {
        summary: "elementType",
      },
    },
  },
  disableGutters: {
    control: {
      type: "boolean",
    },
    table: {
      defaultValue: {
        summary: false,
      },
      type: {
        summary: "bool",
      },
    },
  },
  fixed: {
    control: {
      type: "boolean",
    },
    table: {
      defaultValue: {
        summary: false,
      },
      type: {
        summary: "bool",
      },
    },
  },
  maxWidth: {
    control: {
      options: maxWidths,
      type: "select",
    },
    table: {
      defaultValue: {
        summary: "\"lg\"",
      },
    },
  },
};

export default argTypes;
