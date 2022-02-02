import React from 'react'
import { IconName } from '@naturacosmeticos/natds-icons'
import { AvatarIconProps, AvatarProps } from './Avatar.props'
import styles from './Avatar.styles'
import Icon from '../Icon'

export const isAvatarIcon = (props: AvatarProps): props is AvatarIconProps => props.type === 'icon'

export const AvatarIcon = ({
  size = 'medium', className, ...props
}: AvatarProps) => {
  const { icon } = styles({ size })

  return (
    <>
      {isAvatarIcon(props) && (
        <Icon
          className={`${className} ${icon}`}
          name={props.name as IconName}
          size={size}
          color="onPrimary"
        />
      )}
    </>
  )
}

export default AvatarIcon
