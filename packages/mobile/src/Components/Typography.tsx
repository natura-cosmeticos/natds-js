import * as React from 'react';
import { Text, TextStyle } from 'react-native';
import { withTheme } from 'react-native-paper';
import { IThemeShape } from '../Provider/IThemeShape';

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

type TypographyColor = 'accent' | 'primary' | 'secondary' | 'text' | 'error';

type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

interface ITypographyProps {
  /**
   * Variant for which font options to use. Defaults to 'body1'
   */
  variant?: TypographyVariant;
  /**
   * Children nodes of the component
   */
  children: React.ReactNode;
  /**
   * Colors based on the theme palette
   */
  color?: TypographyColor;
  /**
   * Aligns the the text element. Defaults to 'auto'
   */
  align?: TypographyAlign;
  /**
   * @optional
   * Theme to be used in the component. Defaults to the provider theme
   */
  theme: IThemeShape;
  /**
   * Text Style of the text component. It overrides all of the imposed style from the other props
   */
  style?: TextStyle;
  /**
   * When a view is marked as accessible, it is a good practice to set an accessibilityLabel
   * on the view, so that people who use VoiceOver know what element they have selected.
   * VoiceOver will read this string when a user selects the associated element.
   */
  accessibilityLabel?: string;
  /**
   * When set to true, indicated that this element is accessibility element, meaninig
   * it will group its children elements into a single selectable component
   */
  acessible?: boolean;
}


const Typography: React.FunctionComponent<ITypographyProps> = (
  props: ITypographyProps
) => {
  const {
    variant = 'body1',
    color,
    align,
    style = {},
    acessible = false,
    accessibilityLabel,
  } = props;
  const { typography, colors } = props.theme;

  let textStyle: any = typography
    ? typography[variant]
    : { fontSize: 16, fontWeight: 300 };
  textStyle.fontSize = React.useMemo(() => textStyle.fontSize, [
    props.style,
    props.theme,
    props.variant,
  ]);
  textStyle.fontWeight = String(textStyle.fontWeight);

  textStyle.color = color ? colors[color] : undefined;

  textStyle.textAlign = align ? align : undefined;

  textStyle = {
    ...textStyle,
    ...style,
  };

  return (
    <Text
      accessible={acessible}
      accessibilityLabel={accessibilityLabel}
      style={textStyle}
    >
      {props.children}
    </Text>
  );
};

export default withTheme(Typography);
