import * as React from "react";
import MaterialSwitch from "@material-ui/core/Switch";
import { ISwitchProps } from "./Switch.props";

/**
 * For more advanced usages, check [Material UI Switch docs](https://material-ui.com/components/switches/)
 *
 * ## Importing
 *
 * ```
 * import { Switch } from '@naturacosmeticos/natds-web';
 * ```
 */
export const Switch = React.forwardRef<HTMLButtonElement, ISwitchProps>((
  props: ISwitchProps, ref,
) => <MaterialSwitch {...props} ref={ref} />);

Switch.displayName = "Switch";

export default Switch;
