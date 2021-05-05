import { IconName } from '@naturacosmeticos/natds-icons'
import { InputProps } from 'components/Input'

export type TextFieldFeedback = 'success' | 'error'

type BaseProps = InputProps & {
  feedback?: TextFieldFeedback
  helperText?: string
  label?: string
  required?: boolean
  testID?: string
}

type TextFieldBase = BaseProps & { action?: never }

export type TextFieldActionIcon = BaseProps & ({
  action: 'icon'
  iconName: IconName
  ariaLabel: string
  onClick: () => void
})

export type TextFieldActionImage = BaseProps & ({
  action: 'image'
  alt: string
  src: string
})

export type TextFieldProps = TextFieldBase | TextFieldActionIcon | TextFieldActionImage
