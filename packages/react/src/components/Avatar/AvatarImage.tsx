import React from 'react'
import { AvatarImageProps, AvatarProps } from './Avatar.props'
import styles from './Avatar.styles'

export const isAvatarImage = (props: AvatarProps): props is AvatarImageProps => props.type === 'image'

export const AvatarImage = ({
  size = 'medium', className, ...props
}: AvatarProps) => {
  const { image } = styles({ size })

  return (
    <>
      {isAvatarImage(props) && (
        <img
          className={`${className} ${image}`}
          {...props}
        />
      )}
    </>
  )
}

export default AvatarImage
