import React from 'react'
import { ButtonProps } from './Button.props'
import { Icon } from '../Icon'
import styles from './Button.styles'
import ButtonBase from './ButtonBase'

export const checkIconColor = (variant: string, isDisabled: boolean) => (isDisabled && variant !== 'contained' ? 'mediumEmphasis' : 'highEmphasis')

const Button = ({
  disabled = false,
  fullWidth = false,
  iconPosition = 'right',
  onClick,
  size = 'semiX',
  testID,
  text,
  value,
  variant = 'contained',
  ...rest
}: ButtonProps): JSX.Element => {
  const { button, label, labelContainer } = styles({
    size,
    fullWidth,
    variant,
    disabled,
    iconPosition,
    ...rest
  })

  return (
    <ButtonBase
      classes={button}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      size={size}
      testID={testID}
      value={value}
    >
      <span className={labelContainer}>
        <span className={label}>{text}</span>
        {rest.showIcon && <Icon name={rest.iconName} color={checkIconColor(variant, disabled)} />}
      </span>
    </ButtonBase>
  )
}

export default Button
