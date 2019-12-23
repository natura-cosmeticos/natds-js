import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialListItem, {
  ListItemProps as IListItemProps,
} from '@material-ui/core/ListItem';
export { ListItemProps as IListItemProps } from '@material-ui/core/ListItem';

const ListItem: FunctionComponent<IListItemProps> = (props: IListItemProps) => {
  const { button, ...rest } = props;
  return button ? (
    <MaterialListItem button>{props.children}</MaterialListItem>
  ) : (
    <MaterialListItem {...rest} />
  );
};

export default withTheme(ListItem);
