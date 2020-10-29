import { CardProps } from "@material-ui/core/Card";

export interface ICardProps extends CardProps {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: CardProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  classes?: CardProps["classes"]

  /**
   * If `true`, the card will use raised styling.
   *
   * @default false
   * @optional
   * @type bool
   */
  raised?: CardProps["raised"]
}
