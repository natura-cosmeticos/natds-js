import * as React from "react";
import { ICustomIconProps } from "./CustomIcon.props";
import { useStyles } from "./CustomIcon.styles";
import { IconButton } from "../../IconButton";

export { ICustomIconProps } from "./CustomIcon.props";

export const CustomIcon: React.FunctionComponent<ICustomIconProps> = (props: ICustomIconProps) => {
  const { icon, onIconPress, ...otherProps } = props;

  const { root } = useStyles({ onIconPress });

  return (
    <IconButton className={root} disableRipple={true} onClick={onIconPress} {...otherProps}>{icon}</IconButton>
  );
};

export default CustomIcon;
