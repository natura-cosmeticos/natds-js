import React from 'react'
import styles from './Image.styles'
import { ImageProps } from './Image.props'

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (props, ref) => {
    const {
      className = '',
      sourceImage,
      alternativeText,
      ...rest
    } = props
    const { example } = styles()

    return (
      <img
        className={`${className} ${example}`}
        {...rest}
        ref={ref}
        src={sourceImage}
        alt={alternativeText}
        onError={() => {
          console.log('deu ruim')
        }}
      />
    )
  }
)

export default Image
