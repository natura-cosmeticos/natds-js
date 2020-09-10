import * as React from "react";
import { IThemeWeb } from "../../Themes";
import { TypographyColor, TypographyVariant } from "../Typography";

export interface IIntroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  theme: IThemeWeb | unknown;

  /**
   * Node or text to apply to the Title
   */
  title: React.ReactNode;

  /**
   * Node or text to apply to the Detail
   */
  detail?: React.ReactNode;

  /**
   * Variant of the Title
   */
  titleVariant?: TypographyVariant;

  /**
   * Variant of the Detail
   */
  detailVariant?: TypographyVariant;

  /**
   * Color of the Title
   */
  titleColor?: TypographyColor;

  /**
   * Variant of the Detail
   */
  detailColor?: TypographyColor;

  /**
   * The component used for the title node. Either a string to use a DOM element or a component.
   */
  titleComponent?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

  /**
   * The component used for the title node. Either a string to use a DOM element or a component.
   */
  detailComponent?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
}
