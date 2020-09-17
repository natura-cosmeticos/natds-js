import { sizePropArgType } from "../shared/sizePropArgType";

export const argTypes = {
  animation: {
    description: `
The animation. If \`false\` the animation effect is disabled.

By default, the skeleton pulsate, but you can change the animation for a wave or disable it entirely.
`,
    table: {
      defaultValue: {
        summary: "pulse",
      },
    },
    type: {
      required: false,
    },
  },
  children: {
    description: `
When it comes to other components, you may not want to repeat the height and width.

In these instances, you can pass \`children\` and it will infer its width and height from them.
`,
  },
  height: {
    ...sizePropArgType,
    type: {
      required: false,
    },
  },
  variant: {
    description: "The component supports 3 shape variants for the type of content that will be rendered.",
    table: {
      defaultValue: {
        summary: "text",
      },
    },
    type: {
      required: false,
    },
  },
  width: {
    ...sizePropArgType,
    type: {
      required: false,
    },
  },
};

export default argTypes;
