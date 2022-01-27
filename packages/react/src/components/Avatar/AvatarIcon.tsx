import React from 'react'
import { AvatarIconProps, AvatarProps } from './Avatar.props'
import styles from './Avatar.styles'
import Icon from '../Icon'

export const isAvatarIcon = (props: AvatarProps): props is AvatarIconProps => props.type === 'icon'

const AvatarIcon = React.forwardRef<HTMLElement, AvatarProps>(
  ({
    className = '',
    testID,
    ...props
  }, ref) => {
    const { icon } = styles({})

    return (
      isAvatarIcon(props) ? (
        <Icon
          className={`${className} ${icon}`}
          data-testid={testID}
          ref={ref}
          {...props}
        />
      ) : null
    )
  }
)

export default AvatarIcon
