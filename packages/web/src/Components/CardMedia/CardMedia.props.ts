import { CardMediaProps } from "@material-ui/core/CardMedia";
import * as React from "react";

/**
 * @todo add support to `height` and `width` properties with theme size token support
 */
export interface ICardMediaProps extends Omit<CardMediaProps, "translate"> {

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: CardMediaProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  classes?: CardMediaProps["classes"]

  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   *
   * @default "div"
   * @optional
   * @type element
   */
  component?: React.ReactElement

  /**
   * Image to be displayed as a background image.
   *
   * Either image or src prop must be specified. Note that caller must specify height otherwise the image will not be visible.
   *
   * @optional
   * @type string
   */
  image?: CardMediaProps["image"]

  /**
   * An alias for image property.
   *
   * Available only with media components. Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   *
   * @alias name
   * @optional
   * @type string
   */
  src?: CardMediaProps["src"]

  /**
   * The `title` property is most often shown as a tooltip text when the mouse moves over the element.
   *
   * If you intend to add a readable/visible title, please use `children` instead of `title`.
   *
   * @optional
   * @type string
   */
  title?: CardMediaProps["title"]
}
