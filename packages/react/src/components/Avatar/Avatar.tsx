import React from 'react'
import { AvatarProps } from './Avatar.props'
import styles from './Avatar.styles'
import AvatarImage from './AvatarImage'
import AvatarIcon from './AvatarIcon'
import AvatarLabel from './AvatarLabel'

export const renderVariant = (props: AvatarProps) => {
  const { type } = props

  const types = {
    image: <AvatarImage {...props} />,
    label: <AvatarLabel {...props} />,
    icon: <AvatarIcon {...props} />
  }

  return types[type]
}

const Avatar = React.forwardRef<HTMLElement, AvatarProps>(
  (props, ref) => {
    const {
      className = '',
      size = 'medium',
      type = 'icon',
      ...rest
    } = props
    const { surface } = styles({ size })

    return (
      <span
        className={`${className} ${surface}`}
        ref={ref}
        {...rest}
      >
        {renderVariant({ ...props, size, type })}
      </span>
    )
  }
)

export default Avatar
