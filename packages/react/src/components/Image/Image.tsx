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
      ...rest
    } = props
    const { wrapper, overlay } = styles({ highlight })

    return (
      <div className={wrapper}>
        <img
          {...rest}
          ref={ref}
          src={sourceImage}
          alt={alternativeText}
          onError={() => {
            console.log('deu ruim')
          }}
        />
        {highlight && <div className={overlay} />}
      </div>
    )
  }
)

export default Image
