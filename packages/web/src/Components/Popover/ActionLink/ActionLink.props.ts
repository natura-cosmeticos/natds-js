import { ILinkProps } from "../../Link";

export interface IActionLinkProps extends Omit<ILinkProps, "children" | "theme"> {

  /**
   * Please use `text` instead of `children`.
   *
   * @optional
   * @todo adopt `children` as primary property instead of `text`
   */
  children?: ILinkProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * Check the [CSS API](https://material-ui.com/api/link/#css) for more details.
   *
   * @see https://material-ui.com/api/link/#css
   */
  classes?: ILinkProps["classes"]

  href?: ILinkProps["href"]

  onClick?: ILinkProps["onClick"]

  /**
   * @required
   * @todo deprecate `text` property in favor of `children`
   */
  text: string;
}
