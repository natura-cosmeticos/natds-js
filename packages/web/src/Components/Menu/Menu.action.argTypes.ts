const table = {
  type: { summary: "func" },
};

export const actionArgTypes = {
  onClose: {
    description: `
Callback fired when the component requests to be closed.

The callback receives two arguments:

- \`event\`: The event source of the callback.
- \`reason\`: Can be: \`"escapeKeyDown"\`, \`"backdropClick"\`, \`"tabKeyDown"\`
`,
    table: {
      type: {
        detail: "function(event: object, reason: string) => void",
        summary: "func",
      },
    },
  },
  onEnter: {
    description: "Callback fired before the `Menu` enters.",
    table,
  },
  onEntered: {
    description: "Callback fired when the `Menu` has entered.",
    table,
  },
  onEntering: {
    description: "Callback fired when the `Menu` is entering.",
    table,
  },
  onExit: {
    description: "Callback fired before the `Menu` exits.",
    table,
  },
  onExited: {
    description: "Callback fired when the `Menu` has exited.",
    table,
  },
  onExiting: {
    description: "Callback fired when the Menu is exiting.",
    table,
  },
};

export default actionArgTypes;
