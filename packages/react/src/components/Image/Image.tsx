import React, { useState } from 'react'
import styles from './Image.styles'
import { ImageProps } from './Image.props'

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (props, ref) => {
    const {
      className = '',
      sourceImage,
      fallbackImage,
      alternativeText = '',
      highlight = false,
      fade,
      children,
      ...rest
    } = props
    const { wrapper, overlay } = styles({ highlight, fade })

    const onError = (currentTarget: EventTarget & HTMLImageElement) => {
      if (fallbackImage) {
        // eslint-disable-next-line no-param-reassign
        currentTarget.src = fallbackImage
      }
    }

    return (
      <div className={`${className} ${wrapper}`}>
        <img
          {...rest}
          ref={ref}
          src={sourceImage}
          alt={alternativeText}
          onError={({ currentTarget }) => onError(currentTarget)}
        />
        {highlight && <div className={overlay}>{children}</div>}
      </div>
    )
  }
)

export default Image
