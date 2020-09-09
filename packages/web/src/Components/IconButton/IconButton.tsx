import * as React from "react";

import MaterialIconButton from "@material-ui/core/IconButton";
import { IIconButtonProps } from "./IconButton.props";

export { IIconButtonProps } from "./IconButton.props";

/**
 * For more advanced usages, check [Material UI IconButton docs](https://material-ui.com/components/buttons/#icon-buttons)
 *
 * ## Importing
 *
 * ```jsx
 * import { IconButton } from '@naturacosmeticos/natds-web';
 * ```
 */
export const IconButton = React.forwardRef<unknown, IIconButtonProps>(
  (props: IIconButtonProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any,
  ) => <MaterialIconButton {...props} ref={ref} />);

IconButton.displayName = "IconButton";

export default IconButton;
