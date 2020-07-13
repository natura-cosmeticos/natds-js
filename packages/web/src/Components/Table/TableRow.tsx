import React, { FunctionComponent, forwardRef } from 'react';
import MaterialTableRow, {
  TableRowProps as MaterialTableRowProps,
} from '@material-ui/core/TableRow';
import { withTheme, makeStyles } from '@material-ui/core/styles';
import { IThemeWeb } from '../../Themes';
import { getDefaultTheme } from '../shared';

export interface ITableRowProps extends MaterialTableRowProps {
  theme?: IThemeWeb | unknown;
}

export const TableRow: FunctionComponent<ITableRowProps> = forwardRef((
  props: ITableRowProps,
  ref: any,
) => {
  const { 
    theme: providerTheme
  } = props;

  const theme: any  = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);
  const useStyles = React.useMemo(() => makeStyles({
    selected: {
      backgroundColor: `${theme.palette.primary.main}29 !important`
    }
  }), [theme]);

  const customClasses = useStyles();
  
  return (
    <MaterialTableRow classes={{selected: customClasses.selected}} {...props} ref={ref} />
  );
});

export default withTheme(TableRow);
