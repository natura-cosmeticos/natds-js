import React from "react";
import MaterialSnackbarContent from "@material-ui/core/SnackbarContent";
import clsx from "clsx";

import { ISnackbarContentProps } from "./SnackbarContent.props";
import { useStyles } from "./SnackbarContent.styles";

export { ISnackbarContentProps } from "./SnackbarContent.props";

/**
 * ## Importing
 *
 * ```
 * import { SnackbarContent } from "@naturacosmeticos/natds-web";
 * ```
 */
export const SnackbarContent = React.forwardRef<HTMLElement, ISnackbarContentProps>((
  props: ISnackbarContentProps, ref,
) => {
  const {
    color = "default", className, ...rest
  } = props;

  const classes = useStyles();

  const classNames : string = clsx(
    classes[color as keyof typeof classes],
    className,
  );

  return (
    <MaterialSnackbarContent
      {...rest}
      className={classNames}
      ref={ref}
    />
  );
});

SnackbarContent.displayName = "SnackbarContent";

export default SnackbarContent;
