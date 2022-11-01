import React, { useMemo } from 'react'
import { SnackbarProps } from './Snackbar.props'
import { IconName } from '@naturacosmeticos/natds-icons'
import styles from './Snackbar.styles'
import Icon from '../Icon'
import Button from '../Button'


type DefaultIcons = {
  [key: string]: IconName
}
const DEFAULT_ICONS: DefaultIcons = {
  info: 'outlined-alert-info',
  success: 'outlined-alert-check',
  error: 'outlined-alert-cancel',
  warning: 'outlined-alert-warning'
}

const Snackbar = React.forwardRef<HTMLElement, SnackbarProps>(
  (props, ref) => {
    const {
      backgroundColor = 'info',
      title,
      text,
      className = '',
      customTextColor = '#FFF',
      showIcon = true,
      verticalButton = false,
      positionShowIcon = 'left',
      buttonText,
      customIcon,
      ...rest
    } = props

    const { verticalButtonView, container, viewContainer } = styles({
      backgroundColor,
      verticalButton,
      customTextColor
    })


    const showPosition = useMemo(() => {
      if (showIcon) {
        return positionShowIcon
      }
      return false;
    },[positionShowIcon, showIcon]);

    const renderIcon = () => {
      let iconName
      if (backgroundColor === 'custom' && customIcon) {
        iconName = customIcon
      }
      if (backgroundColor !== 'custom') {
        iconName = DEFAULT_ICONS[backgroundColor]
      }
      return iconName ? <Icon size="standard" name={iconName} color="highEmphasis" /> : null
    }

    return (
      <span
        className={container}
        ref={ref}
        {...rest}
      >
        {showPosition === 'left' && renderIcon()}

        <div className={viewContainer}>
          <div>
            {title && <h6>{title}</h6>}
            {text}
          </div>
          {!!buttonText && (
            <div className={verticalButtonView}>
              <Button
                onClick={() => null}
              >
                {buttonText}
              </Button>
            </div>
          )}
        </div>
        {showPosition === 'right'  && renderIcon()}

      </span>
    )
  }
)

export default Snackbar
