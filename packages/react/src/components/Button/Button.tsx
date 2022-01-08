import React from 'react'
import { Theme } from '@naturacosmeticos/natds-themes'
import { useTheme } from 'react-jss'
import { IconColor } from '../Icon/Icon.props'
import { ButtonProps } from './Button.props'
import { Icon } from '../Icon'
import { Ripple } from '../Ripple'
import styles from './Button.styles'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
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
}, ref) => {
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
    <div className={className}>
      <Ripple disabled={disabled} fullWidth={fullWidth}>
        <button
          className={button}
          data-testid={testID}
          disabled={disabled}
          onClick={onClick}
          type={type}
          ref={ref}
        >
          <div className={labelContainer}>
            <span className={label}>{children}</span>
            {rest.showIcon && <Icon name={rest.iconName} color={iconColor} />}
          </div>
        </button>
      </Ripple>
    </div>
  )
})

export default Button
