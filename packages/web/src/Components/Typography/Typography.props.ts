import { TypographyProps } from "@material-ui/core/Typography";

export type TypographyAlign = "inherit" | "left" | "center" | "right" | "justify";

export type TypographyColor =
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";

/**
 * Variants can have the following values:
 * 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' |
 * 'caption' | 'button' | 'overline' | undefined
 */
export type TypographyVariant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "overline"
    | "inherit"
    | "srOnly";

export interface ITypographyProps extends Omit<TypographyProps, "children"> {

  /**
   * Set the text-align on the component. Defaults to 'inherit'
   *
   * @default "inherit"
   * @optional
   * @type "inherit" | "left" | "center" | "right"
   */
  align?: TypographyAlign;

  /**
   * The inner content of `Typography`.
   *
   * Children nodes to apply the typography.
   *
   * @optional
   * @type node
   */
  children?: TypographyProps["children"];

  /**
   * Override or extend the styles applied to the component
   *
   * @optional
   * @type object
   */
  classes?: TypographyProps["classes"];

  /**
   * The color of the component.
   *
   * It supports those theme colors that make sense for this component.
   *
   * @default "initial"
   * @optional
   * @type "error" | "inherit" | "initial" | "primary" | "secondary" | "textPrimary" | "textSecondary"
   */
  color?: TypographyColor;

  /**
   * The component used for the root node.
   *
   * Either a `string` to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   *
   * @optional
   * @type node
   */
  component?: TypographyProps["children"];

  /**
   * @optional
   * @todo Add a description
   */
  css?: never

  /**
   * Controls the display type
   *
   * @default "initial"
   * @optional
   * @type "initial" | "inline" | "block"
   */
  display?: TypographyProps["display"]

  /**
   * If `true`, the text will have a bottom margin.
   *
   * @default false
   * @optional
   * @type bool
   */
  gutterBottom?: TypographyProps["gutterBottom"]

  /**
   * If true, the text will not wrap, but instead will truncate
   * with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements.
   * The element needs to have a width in order to overflow).
   *
   * @default false
   * @optional
   * @type bool
   */
  noWrap?: boolean;

  /**
   * If `true` and `component` property is `undefined`,
   * the component used for root node will be `p`.
   *
   * If `true`, the text will have a bottom margin.
   *
   * @default false
   * @type bool
   */
  paragraph?: boolean;

  /**
   * Variant that defines the typography based on the provided theme.
   *
   * Typography includes font size, line height, font family and font weight definitions,
   * among others. When variant is `undefined`, it defaults to `body1`
   *
   * @default "body1"
   * @optional
   * @type "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "button" | "caption" | 'overline" | "inherit" | "srOnly"
   */
  variant?: TypographyProps["variant"];

  /**
   * Maps the internal html tag variants, where the key is variant and the value is the tag to use.
   * Alternatively, use the `component` property.
   *
   * We are empirically mapping the variant prop to a range of different DOM element types.
   * For instance, `subtitle1` to `<h6>`.
   *
   * If you wish to change that mapping, you can provide your own.
   *
   * @optional
   * @type object
   */
  variantMapping?: TypographyProps["variantMapping"];
}
