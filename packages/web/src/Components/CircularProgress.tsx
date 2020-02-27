// import React, { FunctionComponent, forwardRef } from 'react';
// import { withTheme } from '@material-ui/styles';
// import MaterialCircularProgress, {CircularProgressProps as ICircularProgressProps} from '@material-ui/core/CircularProgress';
// export { CircularProgressProps as ICircularProgressProps } from '@material-ui/core/CircularProgress';

// export const CircularProgress: FunctionComponent<Omit<ICircularProgressProps, 'translate'>> = forwardRef((
//   props: Omit<ICircularProgressProps, 'translate'>,
//   ref: any
// ) => (
//   <MaterialCircularProgress {...props} ref={ref} />
// ));

// export default withTheme(CircularProgress);

import MaterialCircularProgress from '@material-ui/core/CircularProgress';
export { CircularProgressProps as ICircularProgressProps } from '@material-ui/core/CircularProgress';
// import MaterialCircularProgress from '@material-ui/core/ListItem';
// export { ListItemProps as IListItemProps } from '@material-ui/core/ListItem';

export default MaterialCircularProgress;

