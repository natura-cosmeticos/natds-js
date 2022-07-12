import { IconName } from '@naturacosmeticos/natds-icons'

export interface ChipProps {
  /**
   * Specify an optional className to be added to your Chip
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string

  labelText: string

  leftIcon?: IconName

  rightIcon?: IconName

  color?: 'neutral' | 'primary' | 'secondary' | 'custom'

  avatarURL?: string

  disabled?: boolean

  selected?: boolean

  customBackground?: string

  customBorderColor?: string

  size?: 'semi' | 'semiX' | 'medium'
}
