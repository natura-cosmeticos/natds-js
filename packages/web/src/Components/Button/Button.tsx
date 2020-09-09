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
export const Button = React.forwardRef<unknown, IButtonProps>(
  (
    props: IButtonProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any,
  ) => {

    const { classes, ...otherProps } = props;

    const mergedClasses = {
      ...classes,
      ...useStyles(),
    };

    return <MaterialButton
      classes={mergedClasses}
      ref={ref}
      {...otherProps}
    />;

  });

Button.displayName = "Button";
export default Button;
