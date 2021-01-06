import * as React from "react";
import { SizePropValue } from "../../hooks/useSizeStyleProp";

export type ImageVariant = "standard" | "highlight";
export type ImageFallback = "product" | React.ImgHTMLAttributes<HTMLImageElement>["src"];

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "height" | "width"> {

  /**
   * Image alternative text.
   *
   * @required
   * @type string
   */
  alt: React.ImgHTMLAttributes<HTMLImageElement>["alt"];

  /**
   * `className` property which is applied to the root element.
   *
   * @optional
   * @type string
   */
  className?: React.HTMLAttributes<HTMLImageElement>["className"];

  /**
   * Prevents image selection.
   *
   * If `false`, image can be selected by the user if the browser allows it.
   * If `true`, image selection is disabled if the browser supports `user-select` CSS property.
   *
   * @optional
   * @type boolean
   */
  disableSelection?: boolean;

  /**
   * Add fallback image.
   *
   * When image loads with error apply fallback. If fallback is equal to "product" then apply product-empty image.
   *
   * @optional
   * @type "product" | string
   */
  fallback?: ImageFallback;

  /**
   * Sets the image height.
   *
   * Number of pixels or size token for image height.
   * You can set `"auto"` if you want to let the image determine the height.
   *
   * @optional
   * @type SizePropValue
   */
  height?: SizePropValue;

  /**
   * Sets the maximum image height.
   *
   * Prevents the `height` property value from becoming greater than the value indicated by `maxHeight`.
   *
   * @optional
   * @type SizePropValue
   */
  maxHeight?: SizePropValue;

  /**
   * Sets the maximum image width.
   *
   * Prevents the `width` property value from becoming greater than the value indicated by `maxWidth`.
   *
   * @optional
   * @type SizePropValue
   */
  maxWidth?: SizePropValue;

  /**
   * Sets the image border-radius.
   *
   * If `true`, image border-radius is set to 4px.
   * If `false`, image border-radius is set to none.
   *
   * @optional
   * @type boolean
   */
  radius?: boolean;

  /**
   * An alias for `image` property.
   *
   * @optional
   * @type string
   */
  src?: React.ImgHTMLAttributes<HTMLImageElement>["src"];

  /**
   * Add overlay to the image.
   *
   * If `true`, add image overlay.
   * If `false`, no overlay.
   *
   * @optional
   * @type boolean
   */
  state?: boolean;

  /**
   * Override with inline-styles
   *
   * This inline-style approach is recommended only for dynamic style properties.
   * The CSS properties will override the style of `Image` component (root).
   *
   * Inline styles take precedence over the regular CSS.
   *
   * @optional
   * @type React.CSSProperties
   */
  style?: React.CSSProperties

  /**
   * Sets the image width.
   *
   * Number of pixels or size token for image width.
   * You can set `"auto"` if you want to let the image determine the width.
   *
   * @optional
   * @type SizePropValue
   */
  width?: SizePropValue;

}
