import React, { FunctionComponent, forwardRef } from "react";
import MaterialTableRow, {
  TableRowProps as MaterialTableRowProps,
} from "@material-ui/core/TableRow";
import { withTheme, makeStyles } from "@material-ui/core/styles";
import hexToRgba from "hex-to-rgba";
import { IThemeWeb } from "../../Themes";
import { getDefaultTheme } from "../shared";

export interface ITableRowProps extends MaterialTableRowProps {
  theme?: IThemeWeb | unknown;
}

export const TableRow: FunctionComponent<ITableRowProps> = forwardRef((
  props: ITableRowProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
    theme: providerTheme,
  } = props;

  const rgbAlpha = 0.16;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);
  const useStyles = React.useMemo(() => makeStyles({
    selected: {

      /**
       * @todo refactor: replace with a solid color and remove !important
       */
      backgroundColor: `${hexToRgba(theme.palette.primary.main, rgbAlpha)} !important`,
    },
  }), [theme]);

  const customClasses = useStyles();

  return (
    <MaterialTableRow classes={{ selected: customClasses.selected }} {...props} ref={ref} />
  );
});

TableRow.displayName = "TableRow";

export default withTheme(TableRow);
