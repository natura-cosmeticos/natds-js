import { CardActionAreaProps } from "@material-ui/core/CardActionArea";

/**
 * CardActionArea Props
 */
export interface ICardActionAreaProps extends CardActionAreaProps {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: CardActionAreaProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  classes?: CardActionAreaProps["classes"]
}
