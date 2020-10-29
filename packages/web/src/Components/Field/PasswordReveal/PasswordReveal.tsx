import * as React from "react";
import VisibilityIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityIconOff from "@material-ui/icons/VisibilityOffOutlined";
import { IPasswordRevealProps } from "./PasswordReveal.props";
import { useStyles } from "./PasswordReveal.styles";

export { IPasswordRevealProps } from "./PasswordReveal.props";

export const PasswordReveal = React.forwardRef<unknown, IPasswordRevealProps>(
  (props: IPasswordRevealProps, ref) => {
    const {
      hidePasswordIcon = VisibilityIconOff,
      onTogglePasswordReveal,
      showing,
      showPasswordIcon = VisibilityIcon,
    } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component : any = showing ? hidePasswordIcon : showPasswordIcon;

    const { root } = useStyles();

    return (
      <Component
        className={root}
        onClick={() => onTogglePasswordReveal(!showing)}
        ref={ref}
      />
    );
  });
PasswordReveal.displayName = "PasswordReveal";

export default PasswordReveal;
