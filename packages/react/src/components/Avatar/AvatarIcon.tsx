import React from 'react'
import { IconName } from '@naturacosmeticos/natds-icons'
import { IconSize } from '../Icon/Icon.props'
import { AvatarIconProps, AvatarProps, AvatarSizes } from './Avatar.props'
import styles from './Avatar.styles'
import Icon from '../Icon'

export const isAvatarIcon = (props: AvatarProps): props is AvatarIconProps => props.type === 'icon'

export const convertIconSize = (size: AvatarSizes): string => {
  const iconSize = {
    standard: 'small',
    semi: 'standard',
    semiX: 'semi',
    medium: 'semiX',
    largeXXX: 'largeX'
  }

  return size && iconSize[size]
}

export const AvatarIcon = ({
  size = 'medium', className, brand, ...props
}: AvatarProps): JSX.Element => {
  const { icon } = styles({ size })

  return (
    <>
      {isAvatarIcon(props) && (
        <Icon
          brand={brand}
          className={`${className} ${icon}`}
          name={props.name as IconName}
          size={convertIconSize(size) as IconSize}
          color="onPrimary"
        />
      )}
    </>
  )
}

export default AvatarIcon
