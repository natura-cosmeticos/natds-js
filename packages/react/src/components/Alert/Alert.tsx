import React from 'react'
import { IconName } from '@naturacosmeticos/natds-icons'
import Icon from '../Icon'
import styles from './Alert.styles'
import { AlertProps } from './Alert.props'

type DefaultIcons = {
  [key: string]: IconName
}

const DEFAULT_ICONS: DefaultIcons = {
  info: 'outlined-alert-info',
  success: 'outlined-alert-check',
  error: 'outlined-alert-cancel',
  warning: 'outlined-alert-warning'
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => {
    const {
      className = '',
      color = 'info',
      title,
      type = 'contained',
      showIcon = true,
      customIcon,
      customBackgroundColor,
      customIconColor,
      customTextColor,
      customBorderColor,
      ...rest
    } = props

    const { wrapper, content } = styles({
      color,
      borderType: type,
      customBackgroundColor,
      customIconColor,
      customTextColor,
      customBorderColor
    })

    const renderIcon = () => {
      let iconName

      if (color === 'custom' && customIcon) {
        iconName = customIcon
      }

      if (color !== 'custom') {
        iconName = DEFAULT_ICONS[color]
      }

      return iconName ? <Icon size="standard" name={iconName} color="highEmphasis" /> : null
    }

    return (
      <div
        className={`${className} ${wrapper} Alert-gaya`}
        ref={ref}
        {...rest}
      >
        {showIcon && renderIcon()}

        <div className={content}>
          {title && <h6>{title}</h6>}
          {props.children}
        </div>
      </div>
    )
  }
)

export default Alert
