import React, { FunctionComponent, forwardRef } from 'react';
import MaterialTableContainer, {
  TableContainerProps as MaterialTableContainerProps,
} from '@material-ui/core/TableContainer';
import { withTheme } from '@material-ui/core/styles';

export interface ITableContainerProps extends MaterialTableContainerProps {
  /**
   * @optional
   * @default 'false'
   * Size of the Avatar
   */
  rounded?: boolean;
}

export const TableContainer: FunctionComponent<ITableContainerProps> = forwardRef((
  props: ITableContainerProps,
  ref: any
) => (
  <MaterialTableContainer {...props} ref={ref} />
));

export default withTheme(TableContainer);
