import * as React from "react";
import { TypographyClassKey, TypographyProps } from "@material-ui/core/Typography";

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

export interface ITypographyProps extends TypographyProps {

    /**
     * Variant that defines the typography based on the provided theme.
     *
     * Typography includes font size, line height, font family and font weight definitions,
     * among others. When variant is `undefined`, it defaults to `body1`
     *
     * @default 'body1'
     */
    variant?: TypographyVariant;

    /**
     * Set the text-align on the component. Defaults to 'inherit'
     *
     * @default 'inherit'
     */
    align?: TypographyAlign;

    /**
     * Override or extend the styles applied to the component
     */
    classes?: Partial<Record<TypographyClassKey, string>>;

    /**
     * The color of the component.
     *
     * It supports those theme colors that make sense for this component.
     */
    color?: TypographyColor;

    /**
     * If true, the text will not wrap, but instead will truncate
     * with a text overflow ellipsis.
     *
     * Note that text overflow can only happen with block or inline-block level elements.
     * The element needs to have a width in order to overflow).
     *
     * @default false
     */
    noWrap?: boolean;

    /**
     * The inner content of Typography. Children nodes to apply the typography
     */
    children: React.ReactNode;

    /**
     * The component used for the root node. Either a string to use a DOM element
     * or a component. By default, it maps the variant to a good default headline component.
     */
    component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

    /**
     * If `true` and `component` property is `undefined`,
     * the component used for Root Node will be `p`.
     *
     * If `true`, the text will have a bottom margin.
     */
    paragraph?: boolean;

    /**
     * Maps the internal html tag variants,
     * where the key is variant and the value is the tag to use.
     * Alternatively, use the `component` property.
     *
     * We are empirically mapping the variant prop to a range of different DOM element types.
     * For instance, subtitle1 to `<h6>`.
     *
     * If you wish to change that mapping, you can provide your own.
     * Alternatively, you can use the `component` prop.
     */
    variantMapping?: Record<string, unknown>;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    css?: any;
}
