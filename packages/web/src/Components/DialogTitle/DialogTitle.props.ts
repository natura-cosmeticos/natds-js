import { DialogTitleProps } from "@material-ui/core/DialogTitle";

export interface IDialogTitleProps extends DialogTitleProps {

  /**
   * Component children, usually the included sub-components.
   *
   * @required
   * @type node
   */
  children: DialogTitleProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  classes?: DialogTitleProps["classes"]

  /**
   * Used in `DialogTitle`. If `true`, the children won't be wrapped by a `Typography` component.
   *
   * @default false
   * @optional
   * @see Typography
   * @type bool
   */
  disableTypography?: DialogTitleProps["disableTypography"]
}
