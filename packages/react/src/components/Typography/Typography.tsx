import React, { useEffect, useState } from 'react'
import styles from './Typography.styles'
import { TypographyProps } from './Typography.props'

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  (props, ref) => {
    const {
      variant = 'body1',
      ...rest
    } = props
    const { text } = styles({ variant })
    const [CustomTag, setCustomTag] = useState('p' as keyof JSX.IntrinsicElements)

    useEffect(() => {
      const suffix = variant[variant.length - 1]

      let nameElement

      if (variant.includes('heading')) {
        nameElement = `h${suffix}`
      } else if (variant === 'caption' || variant === 'overline') {
        nameElement = 'span'
      } else {
        nameElement = 'p'
      }

      setCustomTag(nameElement as keyof JSX.IntrinsicElements)
    }, [variant])

    return (
      <div ref={ref}>
        <CustomTag className={text} {...rest}>hello</CustomTag>
      </div>
    )
  }
)

export default Typography
