import { CardActionsProps } from "@material-ui/core/CardActions";

export interface ICardActionsProps extends CardActionsProps {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: CardActionsProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  classes?: CardActionsProps["classes"]

  /**
   * If true, the actions do not have additional margin.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableSpacing?: CardActionsProps["disableSpacing"]
}
