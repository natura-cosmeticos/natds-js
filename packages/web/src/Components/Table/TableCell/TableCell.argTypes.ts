import { ArgType } from "@storybook/addons";
import { ITableCellProps } from "./TableCell.props";
import { aligns } from "./__fixtures__/aligns";
import { objectArgType } from "../../../../.storybook/argTypes/objectArgType";
import { tablePaddingArgType } from "../../../../.storybook/argTypes/tablePaddingArgType";
import { tableSortArgType } from "../../../../.storybook/argTypes/tableSortArgType";

export const argTypes : Record<keyof ITableCellProps | string, ArgType> = {
  align: {
    control: { options: aligns, type: "inline-radio" },
  },
  children: {
    description: "The table cell contents.",
    table: {
      type: { summary: "node" },
    },
  },
  classes: {
    ...objectArgType,
    description: `
Override or extend the styles applied to the component.

See [CSS API](https://material-ui.com/pt/api/table-cell/#css) below for more details.
`,
  },
  component: {
    description: "The component used for the root node. Either a string to use a HTML element or a component.",
    table: {
      type: { summary: "elementType" },
    },
  },
  padding: {
    ...tablePaddingArgType,
    description: `
Sets the padding applied to the cell.

By default, the \`Table\` parent component set the value (default).
`,
  },
  scope: {
    description: "Set `scope` attribute",
  },
  size: {
    ...tablePaddingArgType,
    description: "Specify the size of the cell. By default, the `Table` parent component set the value (medium).",
  },
  sortDirection: {
    ...tableSortArgType,
    description: "Set `aria-sort` direction.",
  },
  variant: {
    control: {
      options: [
        "body",
        "footer",
        "header",
      ],
      type: "inline-radio",
    },
    description: `
Specify the cell type.

By default, the \`TableHead\`, \`TableBody\` or \`TableFooter\` parent component set the value.
`,
  },
};

export default argTypes;
