import { DialogActionsProps } from "@material-ui/core";

export interface IDialogActionsProps extends DialogActionsProps {

  /**
   * Component children, usually the included sub-components.
   *
   * @required
   * @type node
   */
  children: DialogActionsProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  classes?: DialogActionsProps["classes"]

  /**
   * Used in `DialogActions`. If `true`, the actions do not have additional margin.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableSpacing?: DialogActionsProps["disableSpacing"]
}
