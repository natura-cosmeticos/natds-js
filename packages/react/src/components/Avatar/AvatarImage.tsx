import React from 'react'
import { AvatarImageProps, AvatarProps } from './Avatar.props'
import styles from './Avatar.styles'

export const isAvatarImage = (props: AvatarProps): props is AvatarImageProps => props.type === 'image'

export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({
    className = '',
    testID,
    size = 'medium',
    ...props
  }, ref) => {
    const { image } = styles({ size })

    return (
      isAvatarImage(props) ? (
        <img
          className={`${className} ${image}`}
          data-testid={testID}
          ref={ref}
          {...props}
        />
      ) : <>AvatarImage: you must pass the type image attribute to render</>
    )
  }
)

export default AvatarImage
