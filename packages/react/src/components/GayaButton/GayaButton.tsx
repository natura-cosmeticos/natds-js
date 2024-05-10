import React from 'react'
import { Theme } from '@naturacosmeticos/natds-themes'
import { useTheme } from 'react-jss'
import { IconColor } from '../Icon/Icon.props'
import { GayaButtonProps } from './GayaButton.props'
import { Icon } from '../Icon'
import { Ripple } from '../Ripple'
import styles from './GayaButton.styles'

const Button = React.forwardRef<HTMLButtonElement, GayaButtonProps>(({
  children,
  className = '',
  brand,
  ariaLabel,
  mode = 'light',
  color = 'primary',
  textTransform,
  disabled = false,
  fullWidth = false,
  display,
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
    color,
    brand,
    mode,
    fullWidth,
    display,
    iconPosition,
    size,
    variant,
    textTransform,
    ...rest
  })

  const theme: Theme = useTheme()
  const iconColor = theme.button[variant].color.enable.label as IconColor

  return (
    <Ripple brand={brand} disabled={disabled} fullWidth={fullWidth}>
      <button
        className={`${button} ${className} Button-gaya`}
        data-testid={testID}
        disabled={disabled}
        onClick={onClick}
        type={type}
        ref={ref}
        aria-label={ariaLabel}
      >
        <div className={labelContainer}>
          <span className={label}>{children}</span>
          {rest.showIcon && <Icon name={rest.iconName} color={iconColor} />}
        </div>
      </button>
    </Ripple>
  )
})

export default Button
