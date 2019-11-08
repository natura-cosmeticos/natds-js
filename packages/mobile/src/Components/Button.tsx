import * as React from 'react';
import { Button as PaperButton, withTheme, Theme } from 'react-native-paper';
import { Surface, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';

declare type ButtonProps = React.ComponentProps<typeof Surface> & {
  /**
   * Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
   * - `text` - flat button without background or outline (low emphasis)
   * - `outlined` - button with an outline (medium emphasis)
   * - `contained` - button with a background color and elevation shadow (high emphasis)
   */
  mode?: 'text' | 'outlined' | 'contained';
  /**
   * Whether the color is a dark color. A dark button will render light text and vice-versa. Only applicable for `contained` mode.
   */
  dark?: boolean;
  /**
   * Use a compact look, useful for `text` buttons in a row.
   */
  compact?: boolean;
  /**
   * Custom text color for flat button, or background color for contained button.
   */
  color?: string;
  /**
   * Whether to show a loading indicator.
   */
  loading?: boolean;
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
  theme: Theme;
};

const Button: React.FunctionComponent<Omit<ButtonProps, 'height' | 'width'>> = (
  props: Omit<ButtonProps, 'height' | 'width'>
) => <PaperButton {...props} />;

export default withTheme(Button);
