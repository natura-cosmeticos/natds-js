import { ImageProps } from "./Image.props";
import { sizePropArgType } from "../shared/sizePropArgType";

export const argTypes : Record<keyof ImageProps | string, unknown> = {
  alt: {
    control: {
      type: "text",
    },
  },
  className: {
    control: {
      type: "text",
    },
  },
  draggable: {
    control: {
      options: [
        true,
        false,
        "auto",
      ],
      type: "inline-radio",
    },
    description: `
The draggable property specifies whether an element is draggable or not.

Images are draggable by default.

If \`true\` the element is draggable.
If \`false\` the element is not draggable.
If \`"auto"\` uses the default behavior of the browser.

`,
    table: {
      defaultValue: {
        summary: "auto",
      },
      type: {
        summary: "true | false | \"auto\"",
      },
    },
  },
  disableSelection: {},
  height: {
    control: {
      type: "number",
    },
    table: sizePropArgType.table,
  },
  maxHeight: sizePropArgType,
  maxWidth: sizePropArgType,
  src: {
    control: {
      type: "text",
    },
  },
  style: {
    control: {
      type: "object",
    },
    table: {
      defaultValue: {
        summary: "{}",
      },
    },
  },
  width: {
    control: {
      type: "number",
    },
    table: sizePropArgType.table,
  },
};
