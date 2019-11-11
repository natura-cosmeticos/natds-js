import * as React from 'react';
import { Typography as MaterialTypography } from '@material-ui/core';
import { withTheme } from '@material-ui/styles';

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

interface ITypographyProps {
  /**
   * Variant to be used with the theme definitions for typography, defaulting to 'body1'
   */
  variant?: TypographyVariant;
  /**
   * Children nodes to apply the typography
   */
  children: React.ReactNode;
}

const Typography:React.FunctionComponent<ITypographyProps> = (props:ITypographyProps) => {
  const variant = props.variant ? props.variant : 'body1';

  return (<MaterialTypography variant={variant}>{props.children}</MaterialTypography>);
};

export default withTheme(Typography);

