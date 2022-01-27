import React from 'react'
import { AvatarProps } from './Avatar.props'
import styles from './Avatar.styles'
import AvatarImage from './AvatarImage'
import AvatarIcon from './AvatarIcon'
import AvatarLabel from './AvatarLabel'

const Avatar = React.forwardRef<HTMLElement, AvatarProps>(
  ({
    className = '',
    testID,
    ...props
  }, ref) => {
    const { avatar } = styles({})

    const chosenType = (rest: AvatarProps) => {
      const { type = 'icon' } = rest

      const types = {
        image: <AvatarImage {...rest} />,
        label: <AvatarLabel {...rest} />,
        icon: <AvatarIcon {...rest} />
      }

      return types[type]
    }

    return (
      <span
        className={`${className} ${avatar}`}
        data-testid={testID}
        ref={ref}
        {...props}
      >
        {chosenType(props)}
      </span>
    )
  }
)

export default Avatar
