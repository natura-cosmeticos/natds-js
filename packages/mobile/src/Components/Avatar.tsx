import * as React from 'react';
import { Avatar as PaperAvatar, withTheme } from 'react-native-paper';
import {
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  Surface,
  TextStyle,
} from 'react-native';
import { IThemeShape } from '../Provider/IThemeShape';
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';

type AvatarType = 'image' | 'text' | 'icon';

declare type AvatarProps = React.ComponentProps<typeof Surface> & {
  /**
   * Type of Avatar (image, text or icon).
   */
  type: AvatarType;
  /**
   * Image to display for the `Avatar`. Use only in Image Type.
   */
  source: ImageSourcePropType;
  /**
   * Size of the avatar.
   */
  size?: number;
  /**
   * React Native style object.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * @optional
   */
  theme: IThemeShape;
  /**
   * Initials to show as the text in the `Avatar`. Use only in Text Type.
   */
  label: string;
  /**
   * Custom color for the text.
   */
  color?: string;
  /**
   * Style for the title. Use only in Text Type.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * Icon to display for the `Avatar`. Use only in Icon Type.
   */
  icon: IconSource;
};

const Avatar: React.FunctionComponent<Omit<AvatarProps, 'height' | 'width'>> = (
  props: Omit<AvatarProps, 'height' | 'width'>
) => {
  const types = {
    image: <PaperAvatar.Image {...props} />,
    text: <PaperAvatar.Text {...props} />,
    icon: <PaperAvatar.Icon {...props} />,
  };
  return types[props.type];
};

export default withTheme(Avatar);
