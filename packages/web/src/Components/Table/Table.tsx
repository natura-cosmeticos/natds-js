/* eslint-disable complexity */
import * as React from "react";
import MaterialTable from "@material-ui/core/Table";

import { tokens } from "@naturacosmeticos/natds-styles";
import hexToRgba from "hex-to-rgba";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ITableProps } from "./Table.props";
import useDefaultTheme from "../../hooks/useDefaultTheme";

export { ITableProps } from "./Table.props";

/**
 * For more advanced usages, check [Material UI Table docs](https://material-ui.com/pt/components/table/).
 *
 * ## Importing
 *
 * ```
 * import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@naturacosmeticos/natds-web";
 * ```
 *
 */
export const Table = React.forwardRef<HTMLTableElement, ITableProps>(
  (
    props: ITableProps,
    ref,
  ) => {
    const {
      dividers = true,
      rounded = false,
      striped = true,
      ...rest
    } = props;

    const rgbAlpha = 0.04;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const theme = useDefaultTheme();

    /**
     * @todo refactor(web): move Table styles to `natds-styles`, consider `dividers` prop
     */

    const useStyles = React.useMemo(() => makeStyles({
      root: {
        border: dividers ? "none" : `1px solid ${theme.palette?.text?.hint}`,
        borderCollapse: "separate",
        borderRadius: !dividers && rounded ? `${tokens.sizes.micro}` : `${theme.sizes.none}`,
        backgroundColor: theme.palette?.background?.paper,
        color: theme.palette?.text?.primary,
        "& thead > tr > th ": {
          backgroundColor: theme.palette?.background?.paper,
          borderBottom: dividers ? `1px solid ${theme.palette?.text?.hint}` : `${tokens.sizes.none}`,
          borderRight: dividers ? `1px solid ${theme.palette?.text?.hint}` : `${tokens.sizes.none}`,
          borderTop: dividers ? `1px solid ${theme.palette?.text?.hint}` : `${tokens.sizes.none}`,
          fontSize: tokens.fontSize.subtitle2.fontSize,
          fontWeight: tokens.fontSize.subtitle2.fontWeight,
          padding: `${tokens.spacing.standard}px`,
        },
        "& th:first-child": {
          borderLeft: dividers ? `1px solid ${theme.palette?.text?.hint}` : `${tokens.sizes.none}`,
        },
        "& td": {
          borderBottom: dividers ? `1px solid ${theme.palette?.text?.hint}` : `${tokens.sizes.none}`,
          borderRight: dividers ? `1px solid ${theme.palette?.text?.hint}` : `${tokens.sizes.none}`,
          fontSize: tokens.fontSize.body2.fontSize,
          fontWeight: tokens.fontSize.body2.fontWeight,
          padding: `${tokens.spacing.standard}px`,
        },
        "& td:first-child": {
          borderLeft: dividers ? `1px solid ${theme.palette?.text?.hint}` : `${tokens.sizes.none}`,
        },
        "& tr": {
          backgroundColor: theme.palette?.background?.default,
          "&:nth-of-type(even)": {

            /**
             * @todo replace with solid color
             */
            backgroundColor: striped ? `${hexToRgba(theme.palette?.complementary?.highlight || "", rgbAlpha)}` : theme.palette?.background?.default,
          },
        },
        "& thead > tr:first-child": {
          "& > th:first-child": {
            borderTopLeftRadius: rounded && `${tokens.sizes.micro}px`,
          },
          "& > th:last-child": {
            borderTopRightRadius: rounded && `${tokens.sizes.micro}px`,
          },
        },

        "& tbody > tr:last-child": {
          "& > td:first-child": {
            borderBottomLeftRadius: rounded && `${tokens.sizes.micro}px`,
          },
          "& > td:last-child": {
            borderBottomRightRadius: rounded && `${tokens.sizes.micro}px`,
          },
        },
      },
    }), [theme,
      dividers,
      rounded,
      striped]);

    const classes = useStyles({ dividers, rounded, striped });

    return <MaterialTable classes={classes} {...rest} ref={ref}/>;
  },
);

Table.displayName = "Table";

export default Table;
