import * as React from 'react';
import { Chip as PaperChip, withTheme } from 'react-native-paper';
import { StyleProp, ViewStyle, Surface, TextStyle } from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';
import { IThemeShape } from 'Provider/IThemeShape';

declare type ChipProps = React.ComponentProps<typeof Surface> & {
  /**
   * Mode of the chip.
   * - `flat` - flat chip without outline.
   * - `outlined` - chip with an outline.
   */
  mode?: 'flat' | 'outlined';
  /**
   * Text content of the `Chip`.
   */
  children: React.ReactNode;
  /**
   * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
   */
  icon?: IconSource;
  /**
   * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
   */
  avatar?: React.ReactNode;
  /**
   * Whether chip is selected.
   */
  selected?: boolean;
  /**
   * Whether to style the chip color as selected.
   */
  selectedColor?: string;
  /**
   * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean;
  /**
   * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
   */
  accessibilityLabel?: string;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Function to execute on long press.
   */
  onLongPress?: () => void;
  /**
   * Function to execute on close button press. The close button appears only when this prop is specified.
   */
  onClose?: () => void;
  /**
   * Style of chip's text
   */
  textStyle?: TextStyle;
  /**
   * React Native style object
   */
  style?: StyleProp<ViewStyle>;
  /**
   * @optional
   */
  theme: IThemeShape;
  /**
   * Pass down testID from chip props to touchable for Detox tests.
   */
  testID?: string;
};

const Chip: React.FunctionComponent<Omit<ChipProps, 'height' | 'width'>> = (
  props: Omit<ChipProps, 'height' | 'width'>
) => <PaperChip {...props} />;

export default withTheme(Chip);
