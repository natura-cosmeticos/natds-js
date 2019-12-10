import * as React from 'react';
import { Typography as MaterialTypography } from '@material-ui/core';
import { withTheme } from '@material-ui/styles';
import { TypographyClassKey } from '@material-ui/core/Typography';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

type TypographyAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';

type TypographyColor =
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';

export interface ITypographyProps {
  /**
   * Variant to be used with the theme definitions for typography, defaulting to 'body1'
   */
  variant?: TypographyVariant;
  /**
   * Set the text-align on the component. Defaults to 'inherit'
   */
  align?: TypographyAlign;
  /**
   * Override or extend the styles applied to the component
   */
  classes?: Partial<Record<TypographyClassKey, string>>;
  /**
   * The color of the component. It supports those theme colors that make sense for this component
   */
  color?: TypographyColor;
  /**
   * If true, the text will not wrap, but instead will truncate with an ellipsis
   */
  noWrap?: boolean;
  /**
   * Children nodes to apply the typography
   */
  children: React.ReactNode;
  /**
   * The component used for the root node. Either a string to use a DOM element or a component. By default, it maps the variant to a good default headline component
   */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  /**
   * If true and component property is undefined, the component used for Root Node will be `p`
   */
  paragraph?: boolean;
  /**
   * Maps the internal html tag variants, where the key is variant and the value is the tag to use. Alternatively, use the component property
   */
  variantMapping?: object;
}

const Typography: React.FunctionComponent<ITypographyProps> = (
  props: ITypographyProps
) => {
  const {
    variant = 'body1',
    align = 'inherit',
    classes,
    color,
    noWrap = false,
    component,
    paragraph,
    variantMapping,
    ...rest
  } = props;

  return (
    <MaterialTypography
      variant={variant}
      align={align}
      classes={classes}
      color={color}
      noWrap={noWrap}
      component={component}
      variantMapping={variantMapping}
      paragraph={paragraph}
      {...rest}
    >
      {props.children}
    </MaterialTypography>
  );
};

export default withTheme(Typography);
