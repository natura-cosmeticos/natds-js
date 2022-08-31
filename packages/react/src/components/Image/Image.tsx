import React from 'react'
import styles from './Image.styles'
import { ImageProps } from './Image.props'

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (props, ref) => {
    const {
      className = '',
      sourceImage,
      alternativeText = '',
      highlight = false,
      fade,
      children,
      ...rest
    } = props
    const { wrapper, overlay } = styles({ highlight, fade })

    return (
      <div className={`${className} ${wrapper}`}>
        <img
          {...rest}
          ref={ref}
          src={sourceImage}
          alt={alternativeText}
          onError={() => {
            console.log('deu ruim')
          }}
        />
        {highlight && <div className={overlay}>{children}</div>}
      </div>
    )
  }
)

export default Image
