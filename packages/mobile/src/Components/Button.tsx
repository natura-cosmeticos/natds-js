import * as React from 'react';
import { Button as PaperButton, withTheme } from 'react-native-paper';
import { Surface, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';
import { IThemeShape } from 'Provider/IThemeShape';

declare type ButtonProps = React.ComponentProps<typeof Surface> & {
  /**
   * Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
   * - `text` - flat button without background or outline (low emphasis)
   * - `outlined` - button with an outline (medium emphasis)
   * - `contained` - button with a background color and elevation shadow (high emphasis)
   */
  mode?: 'text' | 'outlined' | 'contained';
  /**
   * Custom text color for flat button, or background color for contained button.
   */
  color?: string;
  /**
   * Icon to display for the `Button`.
   */
  icon?: IconSource;
  /**
   * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean;
  /**
   * Label text of the button.
   */
  children: React.ReactNode;
  /**
   * Make the label text uppercased. Note that this won't work if you pass React elements as children.
   */
  uppercase?: boolean;
  /**
   * Accessibility label for the button. This is read by the screen reader when the user taps the button.
   */
  accessibilityLabel?: string;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Style of button's inner content.
   * Use this prop to apply custom height and width.
   */
  contentStyle?: StyleProp<ViewStyle>;
  /**
   * React Native style object.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Style for the button text.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * @optional
   */
  theme: IThemeShape;
};

const Button: React.FunctionComponent<Omit<ButtonProps, 'height' | 'width'>> = (
  props: Omit<ButtonProps, 'height' | 'width'>
) => {
  const { theme } = props;
  let color = theme.colors.text;
  let borderColor = theme.colors.primary;

  if (props.mode !== 'outlined') {
    color = theme.colors.primary;
  }
  if (props.disabled) {
    borderColor = 'rgba(0, 0, 0, 0.32)';
  }

  const overrideProps = { ...props };
  overrideProps.color = color;
  overrideProps.style = { borderColor };
  overrideProps.labelStyle = {
    fontWeight: theme.fonts.regular.fontWeight,
  };

  return <PaperButton uppercase={true} {...overrideProps} />;
};

export default withTheme(Button);
