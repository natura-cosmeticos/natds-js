import React from 'react'
import { AvatarLabelProps, AvatarProps } from './Avatar.props'
import styles from './Avatar.styles'

export const isAvatarLabel = (props: AvatarProps): props is AvatarLabelProps => props.type === 'label'

export const AvatarLabel = React.forwardRef<HTMLLabelElement, AvatarProps>(
  ({
    className = '',
    testID,
    size = 'medium',
    ...props
  }, ref) => {
    const { label } = styles({ size })

    return (
      isAvatarLabel(props) ? (
        <label
          className={`${className} ${label}`}
          data-testid={testID}
          ref={ref}
          {...props}
        >
          {props.label ? props.label : 'NA'}
        </label>
      ) : <>AvatarLabel: you must pass the type label attribute to render</>
    )
  }
)

export default AvatarLabel
