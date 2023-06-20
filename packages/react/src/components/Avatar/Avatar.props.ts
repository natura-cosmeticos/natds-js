import { IconName } from '@naturacosmeticos/natds-icons'
import { Size } from '@naturacosmeticos/natds-themes'
import { BrandTypes } from '../../brandTypes/brandTypes'

export type AvatarSizes = keyof Pick<Size, 'standard' | 'semi' | 'semiX' | 'medium' | 'largeXXX'>;

export type AvatarBaseProps = {
  /**
   * Specify an optional className to be added to your Avatar
   */
  className?: string
  /**
   * Specify an optional className to be added to your Avatar
   */
  brand?: BrandTypes

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
  type: 'image'

  /**
   * The alt text for the image
   */
  alt?: React.ImgHTMLAttributes<HTMLImageElement>['alt']

  /**
   * The source URL of the image you want to display
   */
  src?: React.ImgHTMLAttributes<HTMLImageElement>['src']

  /**
   * Event to fire if an error occurs while loading the image
   */
  onError?: React.ImgHTMLAttributes<HTMLImageElement>['onError']

}

export type AvatarIconProps = AvatarBaseProps & {
  /**
   * Avatar type
   */
  type: 'icon';

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
  type: 'label';

  /**
   * The label to be displayed in the Avatar.
   * It's highly recommended to pass a maximum of two characters
   * @default NA
   */
  label?: string;
}

export type AvatarProps = AvatarImageProps | AvatarIconProps | AvatarLabelProps;
