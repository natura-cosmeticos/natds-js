import { ArgType } from "@storybook/addons";
import { ITablePaginationProps } from "./TablePagination.props";
import { objectArgType } from "../../../../.storybook/argTypes/objectArgType";

export const argTypes : Record<keyof ITablePaginationProps | string, ArgType> = {
  ActionsComponent: {
    description: "The component used for displaying the actions. Either a string to use a HTML element or a component.",
    table: {
      defaultValue: { summary: "TablePaginationActions" },
      type: { summary: "elementType" },
    },
  },
  backIconButtonProps: {
    ...objectArgType,
    description: "Props applied to the back arrow `IconButton` component.",
  },
  backIconButtonText: {
    control: { type: "text" },
    description: "Text label for the back arrow icon button.",
    table: {
      defaultValue: { summary: "\"Previous page\"" },
      type: { summary: "string" },
    },
    type: { name: "string", required: false },
  },
  classes: {
    ...objectArgType,
    description: "Override or extend the styles applied to the component.",
  },
  component: {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    table: {
      defaultValue: { summary: "TableCell" },
      type: { summary: "elementType" },
    },
  },
  count: {
    control: { min: -1, step: 1, type: "number" },
    description: "The total number of rows. To enable server side pagination for an unknown number of items, provide `-1`.",
    type: { name: "number", required: true },
  },
  labelDisplayedRows: {
    description: "Customize the displayed rows label. Invoked with a `{ from, to, count, page }` object.",
    table: {
      defaultValue: {
        // eslint-disable-next-line no-template-curly-in-string
        detail: "({ from, to, count }) => ${from}-${to} of ${count !== -1 ? count : more than ${to}}",
        summary: "({ from, to, count }) => string",
      },
      type: { summary: "func" },
    },
  },
  labelRowsPerPage: {
    description: "Customize the rows per page label.",
    table: {
      defaultValue: "\"Rows per page:\"",
      type: { summary: "node" },
    },
  },
  nextIconButtonProps: {
    ...objectArgType,
    description: "Props applied to the next arrow `IconButton` element.",
  },
  nextIconButtonText: {
    control: { type: "text" },
    description: "Text label for the next arrow icon button.",
    table: {
      defaultValue: { summary: "Next page" },
      type: { summary: "string" },
    },
    type: { name: "string", required: false },
  },
  onChangePage: {
    description: `
Callback fired when the page is changed.

**Signature**:<br />
\`function(event: object, page: number) => void\`

- \`event\`: The event source of the callback;
- \`page:\` The page selected.
`,
    table: {
      type: {
        detail: "function(event: object, page: number) => void",
        summary: "func",
      },
    },
    type: { required: true },
  },
  onChangeRowsPerPage: {
    description: `
Callback fired when the number of rows per page is changed.

**Signature**:<br />
\`function(event: object) => void\`

- \`event\`: The event source of the callback.
`,
    table: {
      type: {
        detail: "function(event: object) => void",
        summary: "func",
      },
    },
  },
  page: {
    control: { min: 0, step: 1, type: "number" },
    description: "The zero-based index of the current page.",
    table: {
      type: { summary: "number" },
    },
    type: { name: "number", required: true },
  },
  rowsPerPage: {
    control: { min: 1, step: 1, type: "number" },
    description: "The number of rows per page.",
    table: {
      type: { summary: "number" },
    },
    type: { name: "number", required: true },
  },
  rowsPerPageOptions: {
    control: { type: "array" },
    description: `
Customizes the options of the rows per page select field.

If less than two options are available, no select field will be displayed.
`,
    table: {
      defaultValue: { summary: "[10, 25, 50, 100]" },
      type: { summary: "array" },
    },
  },
  SelectProps: {
    ...objectArgType,
    description: "Props applied to the rows per page `Select` element.",
    table: {
      ...objectArgType.table,
      defaultValue: { summary: "{}" },
    },
  },
};

export default argTypes;
