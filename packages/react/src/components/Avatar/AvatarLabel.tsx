import React from 'react'
import { AvatarLabelProps, AvatarProps } from './Avatar.props'
import styles from './Avatar.styles'

export const isAvatarLabel = (props: AvatarProps): props is AvatarLabelProps => props.type === 'label'

export const AvatarLabel = ({ className = '', size = 'medium', ...props }: AvatarProps) => {
  const { label } = styles({ size })

  return (
    <>
      {isAvatarLabel(props) && (
        <label
          className={`${className} ${label}`}
          {...props}
        >
          {props.label ? props.label : 'NA'}
        </label>
      )}

    </>

  )
}

export default AvatarLabel
