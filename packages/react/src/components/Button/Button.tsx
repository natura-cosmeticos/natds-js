import React from 'react'
import { ButtonProps } from './Button.props'
import { Icon } from '../Icon'
import { Ripple } from '../Ripple'
import styles from './Button.styles'

export const checkIconColor = (variant: string, isDisabled: boolean) => (isDisabled && variant !== 'contained' ? 'mediumEmphasis' : 'highEmphasis')

const Button = ({
  disabled = false,
  fullWidth = false,
  iconName,
  iconPosition = 'right',
  onClick,
  showIcon = false,
  size = 'semiX',
  testID,
  text,
  variant = 'contained'
}: ButtonProps): JSX.Element => {
  const { button, label, labelContainer } = styles({
    size,
    fullWidth,
    variant,
    disabled,
    iconPosition,
    showIcon
  })

  return (
    <Ripple disabled={disabled} fullWidth={fullWidth}>
      <button
        className={button}
        data-testid={testID}
        disabled={disabled}
        onClick={onClick}
        type="button"
      >
        <span className={labelContainer}>
          <span className={label}>{text}</span>
          {showIcon && <Icon name={iconName} color={checkIconColor(variant, disabled)} />}
        </span>
      </button>
    </Ripple>
  )
}

export default Button
