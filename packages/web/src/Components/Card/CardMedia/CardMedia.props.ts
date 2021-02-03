import * as React from "react";
import { CardMediaProps } from "@material-ui/core/CardMedia";

/**
 * @todo add support to `height` and `width` properties with theme size token support
 */
export interface ICardMediaProps extends CardMediaProps {

  /**
   * A description for the media content
   * @type string
   */
  alt: string;

  /**
   * The content of the component.
   *
   * @optional
   * @type node
   */
  children?: CardMediaProps["children"];

  /**
   * Override or extend the styles applied to the component.
   *
   * @optional
   * @type object
   */
  classes?: CardMediaProps["classes"];

  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   *
   * @default "div"
   * @optional
   * @type element
   */
  component?: React.ReactElement;

  /**
   * Image to be displayed as a background image.
   *
   * Either image or src prop must be specified. Note that caller must specify height otherwise the image will not be visible.
   *
   * @optional
   * @type string
   */
  image?: CardMediaProps["image"];

  /**
   * An alias for image property.
   *
   * Available only with media components. Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   *
   * @alias name
   * @optional
   * @type string
   */
  src?: CardMediaProps["src"];
}
