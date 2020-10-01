import * as React from "react";
import { TypographyColor, TypographyVariant } from "../Typography";

export interface IIntroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {

  /**
   * Node or text to apply to the Detail
   */
  detail?: React.ReactNode;

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  detailColor?: TypographyColor;

  /**
   * The HTML element or component used for the `IntroDetail` node.
   *
   * Either a string to use a DOM element or a component.
   */
  detailComponent?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

  /**
   * Variant of the Detail
   *
   * Defines the font size, line height, font family and font weight based on the provided theme for the Detail
   */
  detailVariant?: TypographyVariant;

  /**
   * Node or text to apply to the Title
   */
  title: React.ReactNode;

  /**
   * Color of the Title
   *
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  titleColor?: TypographyColor;

  /**
   * The HTML element or component used for the IntroTitle node.
   *
   * Either a string to use a DOM element or a component.
   */
  titleComponent?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

  /**
   * Variant of the Title
   *
   * Defines the font size, line height, font family and font weight based on the provided theme for the Title
   */
  titleVariant?: TypographyVariant;

}
