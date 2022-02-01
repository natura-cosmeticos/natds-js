import { IconName } from '@naturacosmeticos/natds-icons'
import { Size } from '@naturacosmeticos/natds-themes'

type AvatarSizes = keyof Pick<Size, 'standard' | 'semi' | 'semiX' | 'medium' | 'largeXXX' >;

export type AvatarBaseProps = {
  /**
   * Specify an optional className to be added to your Avatar
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * Specify the size of the Avatar
   * @default medium
   */
  size?: AvatarSizes
}

export type AvatarImageProps = AvatarBaseProps & {
  /**
   * Avatar type
   */
  type?: 'image'

  /**
   * The alt text for the image
   */
  alt?: string;

  /**
   * The source URL of the image you want to display
   */
  src?: string;

}

export type AvatarIconProps = AvatarBaseProps & {
  /**
   * Avatar type
   */
  type?: 'icon';

  /**
   * The icon name
   * @default outlined-default-mockup
   */
  name?: IconName;
}

export type AvatarLabelProps = AvatarBaseProps & {
  /**
   * Avatar type
   */
  type?: 'label';

  /**
   * The label to be displayed in the Avatar
   * @default NA
   */
  label?: string;
}

export type AvatarProps = AvatarImageProps | AvatarIconProps | AvatarLabelProps;
