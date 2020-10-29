import { ILinkProps } from "../../Link";

export interface IActionLink extends Omit<ILinkProps, "children" | "theme"> {

  /**
   * Please use `text` instead of `children`.
   *
   * @optional
   * @todo adopt `children` as primary property instead of `text`
   */
  children?: ILinkProps["children"];

  href?: ILinkProps["href"];

  onClick?: ILinkProps["onClick"];

  /**
   * @required
   * @todo deprecate `text` property in favor of `children`
   */
  text: string;
}
