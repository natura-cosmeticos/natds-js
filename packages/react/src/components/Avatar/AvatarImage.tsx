import React from 'react'
import { AvatarImageProps, AvatarProps } from './Avatar.props'
import styles from './Avatar.styles'

export const isAvatarImage = (props: AvatarProps): props is AvatarImageProps => props.type === 'image'

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({
    className = '',
    testID,
    ...props
  }, ref) => {
    const { icon } = styles({})

    return (
      isAvatarImage(props) ? (
        <img
          className={`${className} ${icon}`}
          data-testid={testID}
          ref={ref}
          {...props}
        />
      ) : null
    )
  }
)

export default AvatarImage
