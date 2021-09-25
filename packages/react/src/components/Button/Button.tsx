import React from 'react'
import { Theme } from '@naturacosmeticos/natds-themes'
import { useTheme } from 'react-jss'
import { IconColor } from 'components/Icon/Icon.props'
import { ButtonProps } from './Button.props'
import { Icon } from '../Icon'
import { Ripple } from '../Ripple'
import styles from './Button.styles'

const Button = ({
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  iconPosition = 'right',
  onClick,
  size = 'semiX',
  testID,
  type = 'button',
  variant = 'contained',
  ...rest
}: ButtonProps): JSX.Element => {
  const { button, label, labelContainer } = styles({
    disabled,
    fullWidth,
    iconPosition,
    size,
    variant,
    ...rest
  })

  const theme: Theme = useTheme()
  const iconColor = theme.button[variant].color.enable.label as IconColor

  return (
    <Ripple disabled={disabled} fullWidth={fullWidth}>
      <button
        className={`${button} ${className}`}
        data-testid={testID}
        disabled={disabled}
        onClick={onClick}
        type={type}
      >
        <div className={labelContainer}>
          <span className={label}>{children}</span>
          {rest.showIcon && <Icon name={rest.iconName} color={iconColor} />}
        </div>
      </button>
    </Ripple>
  )
}

export default Button
