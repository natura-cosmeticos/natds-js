import React, { useEffect, useState } from 'react'
import styles from './Typography.styles'
import { TypographyProps } from './Typography.props'

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (props, ref) => {
    const {
      variant = 'body1',
      ...rest
    } = props
    const { example } = styles({ variant })
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

    return <CustomTag className={example}>hello</CustomTag>
  }
)

export default Typography
