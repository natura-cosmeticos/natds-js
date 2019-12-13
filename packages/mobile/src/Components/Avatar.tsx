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
import { IAvatarSizes } from '@naturacosmeticos/natds-styles';

export type AvatarType = 'image' | 'text' | 'icon';
export type AvatarSizes = keyof IAvatarSizes;

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
  /**
   * The possible sizes of the Avatar
   */
  avatarSizes?: AvatarSizes;
};

function withSizes(size: AvatarSizes | undefined = 'standard', theme: any) {
  const { avatarSizes }: { avatarSizes: IAvatarSizes } = theme;
  if (!avatarSizes) return {};

  return { size: avatarSizes[size].size };
}

const Avatar: React.FunctionComponent<Omit<AvatarProps, 'height' | 'width'>> = (
  props: Omit<AvatarProps, 'height' | 'width'>
) => {
  const size = withSizes(props.avatarSizes, props.theme);
  const color = props.theme.colors.text;

  const types = {
    image: <PaperAvatar.Image {...props} {...size} />,
    text: <PaperAvatar.Text {...props} {...size} color={color} />,
    icon: <PaperAvatar.Icon {...props} {...size} color={color} />,
  };
  return types[props.type];
};

export default withTheme(Avatar);
