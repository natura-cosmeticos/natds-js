import * as React from "react";

import MaterialButton from "@material-ui/core/Button";
import { IButtonProps } from "./Button.props";
import useStyles from "./Button.styles";

export { IButtonProps } from "./Button.props";

/**
 * ```
 * import { Button } from '@naturacosmeticos/natds-web';
 * ```
 *
 * For more advanced usages, check [Material UI Button docs](https://material-ui.com/components/buttons/)
 */
export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props: IButtonProps, ref) => {

    const { classes, disableElevation, ...otherProps } = props;

    const mergedClasses = {
      ...classes,
      ...useStyles(),
    };

    return <MaterialButton
      classes={mergedClasses}
      disableElevation={disableElevation}
      ref={ref}
      {...otherProps}
    />;

  });

Button.displayName = "Button";
export default Button;
