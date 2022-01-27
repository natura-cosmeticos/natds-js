import React from 'react'
import { AvatarLabelProps, AvatarProps } from './Avatar.props'
import styles from './Avatar.styles'

export const isAvatarLabel = (props: AvatarProps): props is AvatarLabelProps => props.type === 'label'

const AvatarLabel = React.forwardRef<HTMLLabelElement, AvatarProps>(
  ({
    className = '',
    testID,
    ...props
  }, ref) => {
    const { icon } = styles({})

    return (
      isAvatarLabel(props) ? (
        <label
          className={`${className} ${icon}`}
          data-testid={testID}
          ref={ref}
          {...props}
        />
      ) : null
    )
  }
)

export default AvatarLabel
