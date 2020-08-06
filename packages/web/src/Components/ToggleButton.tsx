import React, {
  FunctionComponent, ReactNode, forwardRef, useEffect, useState,
} from "react";
import { withTheme } from "@material-ui/styles";
import IconButton, { IIconButtonProps } from "./IconButton";

export interface IToggleButtonProps extends Omit<IIconButtonProps, "translate" | "onClick" | "children"> {

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

export const ToggleButton: FunctionComponent<IToggleButtonProps> = forwardRef((
  props: IToggleButtonProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
      iconOn, iconOff, checked = false, onClick, ...rest
    } = props,
    [
      checkedState, onToggle,
    ] = useState(checked);
  const icon : React.ReactNode = checkedState ? iconOn : iconOff;

  useEffect(() => onToggle(checked), [checked]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onToggle(!checkedState);
    if (onClick) {
      onClick(event, checkedState);
    }
  };

  return (
    <IconButton
      onClick={handleClick}
      {...rest}
      ref={ref}
    >{icon}</IconButton>
  );
});

ToggleButton.displayName = "ToggleButton";

export default withTheme(ToggleButton);
