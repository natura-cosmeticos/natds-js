import React from 'react'
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
      border,
      children,
      ...rest
    } = props
    const { wrapper, overlay } = styles({ highlight, fade, border })

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
        {highlight && <div className={overlay} data-testid="image-overlay">{children}</div>}
      </div>
    )
  }
)

export default Image
