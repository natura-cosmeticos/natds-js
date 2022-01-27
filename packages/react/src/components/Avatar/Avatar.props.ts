import { IconName } from '@naturacosmeticos/natds-icons'

export interface AvatarBaseProps {
  /**
   * Specify an optional className to be added to your Avatar
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;
}

export interface AvatarImageProps extends AvatarBaseProps {
  /**
   * Avatar type
   */
  type?: 'image'

  /**
   * The alt text for the image
   */
  alt: string;

  /**
   * The source URL of the image you want to display
   */
  src: string;

}

export interface AvatarIconProps extends AvatarBaseProps {
  /**
   * Avatar type
   */
  type?: 'icon';

  /**
   * The icon name
   */
  name: IconName;
}

export interface AvatarLabelProps extends AvatarBaseProps {
  /**
   * Avatar type
   */
  type?: 'label';

  /**
   * The label text
   */
  label: string;

}

export type AvatarProps = AvatarImageProps | AvatarIconProps | AvatarLabelProps;
