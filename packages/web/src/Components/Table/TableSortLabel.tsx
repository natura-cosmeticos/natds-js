import React, { FunctionComponent, forwardRef } from 'react';
import MaterialTableSortLabel, {
  TableSortLabelProps as MaterialTableRowProps,
} from '@material-ui/core/TableSortLabel';
import { withTheme, makeStyles } from '@material-ui/core/styles';
import { IThemeWeb } from '../../Themes';
import { getDefaultTheme } from '../shared';

export interface ITableSortLabelProps extends MaterialTableRowProps {
  theme?: IThemeWeb | unknown;
}

export const TableSortLabel: FunctionComponent<ITableSortLabelProps> = forwardRef((
  props: ITableSortLabelProps,
  ref: any
) => {
  const { 
    theme: providerTheme
  } = props;

  const theme: any  = React.useMemo(() => getDefaultTheme(providerTheme), [providerTheme]);
  const useStyles = React.useMemo(() => makeStyles({
    icon: {
      marginLeft: `8px !important`
    }
  }), [theme]);

  const customClasses = useStyles();

  return (
    <MaterialTableSortLabel classes={{icon: customClasses.icon}} {...props} ref={ref} />
  );
});

export default withTheme(TableSortLabel);
