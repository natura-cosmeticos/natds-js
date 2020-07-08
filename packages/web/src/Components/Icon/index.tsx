import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import '@naturacosmeticos/natds-icons/dist/natds-icons.css';
import clsx from 'clsx';
import {IIconProps} from "./IIconProps";
import {makeIconStyles} from "./makeIconStyles";

export {IIconProps} from "./IIconProps";

export const Icon: FunctionComponent<IIconProps> = forwardRef((
  {
    className: receivedClassName,
    name,
    size,
    theme,
    ...props
  }: IIconProps,
  ref: any
) => {

  const useIconStyles = makeIconStyles({size});
  const classes = useIconStyles();

  const classNames = [
    'natds-icons',
    `natds-icons-${String(name)}`,
    classes.root,
    receivedClassName
  ];

  return <i className={clsx(classNames)} ref={ref} {...props} />;

});

export default withTheme(Icon);
