import { FabProps } from "@material-ui/core/Fab";
import { PropTypes } from "@material-ui/core";

export type MaterialFabColor = PropTypes.Color;
export type FabColor = "primary" | "secondary" | "light";
export type FabSize = "small" | "medium" | "large";
export type FabVariant = "round" | "extended";

export interface IFabProps extends Pick<FabProps,
  | "children"
  | "disabled"
  | "disableFocusRipple"
  | "href"
  | "size"
  | "variant"> {

  /**
   * The color of the component
   *
   * @default "secondary"
   * @optional
   */
  color ?: FabColor;

  /**
   * @deprecated `disabled` property was deprecated since version 0.19 and will be removed at 1.0.
   * The FAB promotes action, and should not be displayed in a disabled state.
   * If you want to present a FAB that does not perform an action, you should also present an explanation to the user.
   */
  disabled ?: boolean
}
