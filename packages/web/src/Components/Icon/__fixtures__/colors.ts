import { IIconProps } from '../Icon.props'

/**
 * @todo add support to color tokens from Natura & Co. themes
 */
export const colors : Record<IIconProps['color'], IIconProps['color']> = {
  default: 'inherit',
  error: 'error',
  inherit: 'inherit',
  primary: 'primary',
  secondary: 'secondary'
}
