import React, { FunctionComponent, useState, useEffect, ReactNode } from 'react';
import { withTheme } from '@material-ui/styles';
import IconButton, { IIconButtonProps } from './IconButton';

export interface IToggleButtonProps extends Omit<IIconButtonProps, 'translate' | 'onClick' | 'children'> {
  /**
   * Icon component to when the state is ON
   */
  iconOn: ReactNode;
  /**
   * Icon component to when the state is OFF
   */
  iconOff: ReactNode;
  /**
   * @optional
   * @default false
   * Defines the initial state
   */
  checked?: boolean;
  /**
   * @optional
   * OnClick callback, returns the original click event and the current state
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, state: boolean) => void;
}

export const ToggleButton: FunctionComponent<IToggleButtonProps> = (props: IToggleButtonProps) => {
  const { iconOn, iconOff, checked = false, onClick, ...rest } = props;
  const [checkedState, onToggle] = useState(checked);
  const icon: any = checkedState ? iconOn : iconOff;

  useEffect(() => onToggle(checked), [checked]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onToggle(!checkedState);
    onClick && onClick(event, checkedState);
  };

  return (
    <IconButton
      children={icon}
      onClick={handleClick}
      {...rest}
    />
  );
};

export default withTheme(ToggleButton);
