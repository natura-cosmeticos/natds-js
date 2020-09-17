/* eslint-disable no-magic-numbers */
import { IGridItemProps } from "./GridItem.props";

const baseArgTypes = {
  control: {
    options: [
      false,
      "auto",
      true,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
    ],
    type: "select",
  },
  table: {
    defaultValue: {
      summary: false,
    },
  },
};

export const argTypes : Record<keyof IGridItemProps | string, unknown> = {
  xl: {
    ...baseArgTypes,
    description: `
Defines the number of grids the component is going to use.
It's applied for the \`xl\` breakpoint and wider screens if not overridden.
`,
  },
  lg: {
    ...baseArgTypes,
    description: `
Defines the number of grids the component is going to use.
It's applied for the \`lg\` breakpoint and wider screens if not overridden.
`,
  },
  md: {
    ...baseArgTypes,
    description: `
Defines the number of grids the component is going to use.
It's applied for the \`md\` breakpoint and wider screens if not overridden.
`,
  },
  sm: {
    ...baseArgTypes,
    description: `
Defines the number of grids the component is going to use.
It's applied for the \`sm\` breakpoint and wider screens if not overridden.
`,
  },
  xs: {
    ...baseArgTypes,
    description: `
Defines the number of grids the component is going to use.
It's applied for the \`xs\` breakpoint and wider screens if not overridden.
`,
  },
};
