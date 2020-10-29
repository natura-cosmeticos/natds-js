import { ILinkProps } from "../Link.props";

export const variants : Record<ILinkProps["variant"], ILinkProps["variant"]> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "subtitle1",
  subtitle2: "subtitle2",
  body1: "body1",
  body2: "body2",
  caption: "caption",
  button: "button",
  overline: "overline",
  inherit: "inherit",

  /**
   * Allows a link to be available only to screen readers.
   * It can be useful for "Skip to content" links, for example.
   *
   * @example
   *
   * ```
   * <Link href={"#content"} variant={"srOnly"}>Skip to content</Link>
   * ```
   */
  srOnly: "srOnly",
};

export default variants;
