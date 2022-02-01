import React from 'react'
import { AvatarIconProps, AvatarProps } from './Avatar.props'
import styles from './Avatar.styles'
import Icon from '../Icon'

export const isAvatarIcon = (props: AvatarProps): props is AvatarIconProps => props.type === 'icon'

export const AvatarIcon = React.forwardRef<HTMLElement, AvatarProps>(
  ({
    className = '',
    testID,
    size = 'medium',
    ...props
  }, ref) => {
    const { icon } = styles({ size })

    return (
      isAvatarIcon(props) ? (
        <Icon
          className={`${className} ${icon}`}
          data-testid={testID}
          ref={ref}
          name={props.name ? props.name : 'outlined-default-mockup'}
          size={size}
          {...props}
        />
      ) : <>AvatarIcon: you must pass the type icon attribute to render</>
    )
  }
)

export default AvatarIcon
