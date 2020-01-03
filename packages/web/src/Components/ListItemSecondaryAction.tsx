import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialListItemSecondaryAction, {
  ListItemSecondaryActionProps as IListItemSecondaryActionProps,
} from '@material-ui/core/ListItemSecondaryAction';
export { ListItemSecondaryActionProps as IListItemSecondaryActionProps } from '@material-ui/core/ListItemSecondaryAction';

const ListItemSecondaryAction: FunctionComponent<IListItemSecondaryActionProps> = (
  props: IListItemSecondaryActionProps
) => <MaterialListItemSecondaryAction {...props} />;

export default withTheme(ListItemSecondaryAction);
