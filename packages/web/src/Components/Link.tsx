import React, { FunctionComponent, forwardRef } from 'react';
import MaterialLink, { LinkProps } from '@material-ui/core/Link';
import { withTheme } from '@material-ui/core';
import { IThemeWeb } from 'Themes';
import { getDefaultTheme } from './shared';

type LinkColor =
  | 'default'
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';

export interface ILinkProps extends Omit<LinkProps, "color"> {
  /**
   * @optional
   * @default 'default'
   * Color of the Link.
   */
  color?: LinkColor;
  /**
   * @optional
   */
  theme?: IThemeWeb | unknown;
}

const Link: FunctionComponent<ILinkProps> = forwardRef((
  props: ILinkProps,
  ref: any
) => {
  const {
    color = 'default',
    theme: providerTheme,
    style
  } = props;

  const defaultColor = color === 'default';
  const validColor = defaultColor ? 'inherit' : color;

  const theme = React.useMemo(() => {
    return getDefaultTheme(providerTheme);
  }, [providerTheme]);

  const colorMap = React.useMemo(() => {
    const { palette } = theme as any;

    return {
      default: {
        color: palette.complementary.link
      }
    };
  }, [theme]);

  const colorStyle = defaultColor ? colorMap[color] : {};

  return (
    <MaterialLink
      {...props}
      color={validColor as any}
      style={{ ...colorStyle, ...style }}
      ref={ref}
    />
  );
});

export default withTheme(Link);
