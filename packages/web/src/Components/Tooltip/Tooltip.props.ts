import { TooltipProps } from "@material-ui/core/Tooltip";

export interface ITooltipProps extends TooltipProps {

  /**
   * Tooltip reference element.
   *
   * If you forget to set children for this element, the error
   * `Cannot read property 'ref' of undefined` can occur.
   *
   * @required
   * @type element
   */
  children: TooltipProps["children"]
}
