import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialListItemSecondaryAction, {
  ListItemSecondaryActionProps as IListItemSecondaryActionProps
} from '@material-ui/core/ListItemSecondaryAction';
export { ListItemSecondaryActionProps as IListItemSecondaryActionProps } from '@material-ui/core/ListItemSecondaryAction';

const ListItemSecondaryAction: FunctionComponent<IListItemSecondaryActionProps> = forwardRef((
  props: IListItemSecondaryActionProps,
  ref: any
) => <MaterialListItemSecondaryAction {...props} ref={ref} />);

export default withTheme(ListItemSecondaryAction);
