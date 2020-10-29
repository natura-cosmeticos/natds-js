import { DialogContentTextProps } from "@material-ui/core/DialogContentText";

export interface IDialogContentTextProps extends DialogContentTextProps {

  /**
   * Component children, usually the included sub-components.
   *
   * @required
   * @type node
   */
  children: DialogContentTextProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  classes?: DialogContentTextProps["classes"]
}
