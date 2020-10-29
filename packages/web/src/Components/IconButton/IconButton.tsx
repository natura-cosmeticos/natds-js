import * as React from "react";

import MaterialIconButton from "@material-ui/core/IconButton";
import { IIconButtonProps } from "./IconButton.props";

export { IIconButtonProps } from "./IconButton.props";

/**
 * For advanced usages, check [Material UI IconButton docs](https://material-ui.com/components/buttons/#icon-buttons)
 *
 * ## Importing
 *
 * ```jsx
 * import { IconButton } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/components/buttons/#icon-buttons
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IIconButtonProps>(
  (props: IIconButtonProps, ref) => <MaterialIconButton {...props} ref={ref} />);

IconButton.displayName = "IconButton";

export default IconButton;
