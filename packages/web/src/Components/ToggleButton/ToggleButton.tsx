import * as React from "react";
import IconButton from "../IconButton";
import { IToggleButtonProps } from "./ToggleButton.props";

export { IToggleButtonProps } from "./ToggleButton.props";

/**
 * ## Importing
 *
 * ```
 * import { ToggleButton } from '@naturacosmeticos/natds-web';
 * ```
 */
export const ToggleButton = React.forwardRef<HTMLButtonElement, IToggleButtonProps>((
  props: IToggleButtonProps, ref,
) => {
  const {
    checked = false,
    iconOff,
    iconOn,
    onClick,
    ...otherProps
  } = props;

  const [
    checkedState, onToggle,
  ] = React.useState(checked);

  const icon : React.ReactNode = checkedState ? iconOn : iconOff;

  React.useEffect(() => onToggle(checked), [checked]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onToggle(!checkedState);
    if (onClick) {
      onClick(event, checkedState);
    }
  };

  return (
    <IconButton
      onClick={handleClick}
      {...otherProps}
      ref={ref}
    >{icon}</IconButton>
  );
});

ToggleButton.displayName = "ToggleButton";

export default ToggleButton;
