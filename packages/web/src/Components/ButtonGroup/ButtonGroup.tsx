import * as React from "react";
import MaterialButtonGroup from "@material-ui/core/ButtonGroup";
import { IButtonGroupProps } from "./ButtonGroup.props";

export { IButtonGroupProps } from "./ButtonGroup.props";

/**
 * For more advanced usages, check [Material UI ButtonGroup docs](https://material-ui.com/components/buttons/#grouped-buttons)
 *
 * ## Import
 *
 * ```
 * import { Button, ButtonGroup } from '@naturacosmeticos/natds-web';
 * ```
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, IButtonGroupProps>((
  props: IButtonGroupProps, ref,
) => {
  const { disableElevation, ...otherProps } = props;

  return <MaterialButtonGroup {...otherProps} disableElevation={disableElevation} ref={ref} />;
});

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
