import { Color } from '@naturacosmeticos/natds-themes'

export type BadgeColors = keyof Pick<Color, 'primary' | 'secondary' | 'success' | 'alert'>

export interface BadgePulse {
  ariaHidden?: boolean
  ariaLabel?: string
  className?: string
  color?: BadgeColors
  variant: 'pulse',
  testID?: string
}

export interface BadgeDot {
  ariaHidden?: boolean
  ariaLabel?: string
  className?: string
  color?: BadgeColors
  variant: 'dot'
  testID?: string
}

export interface BadgeStandard {
  ariaHidden?: boolean
  ariaLabel?: string
  className?: string
  color?: BadgeColors
  limit?: number
  value: number
  variant: 'standard'
  testID?: string
}

export type BadgeProps = BadgePulse | BadgeDot | BadgeStandard
