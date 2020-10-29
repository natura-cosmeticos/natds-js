import { DialogContentProps } from "@material-ui/core/DialogContent";

export interface IDialogContentProps extends DialogContentProps {

  /**
   * Component children, usually the included sub-components.
   *
   * @required
   * @type node
   */
  children: DialogContentProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  classes?: DialogContentProps["classes"]

  /**
   * Used in `DialogContent`. Display the top and bottom dividers.
   *
   * @default false
   * @optional
   * @type bool
   */
  dividers?: DialogContentProps["dividers"]
}
