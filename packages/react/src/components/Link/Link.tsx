import React from 'react'
import { LinkProps } from './Link.props'
import styles from './Link.styles'

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({
    className = '',
    testID,
    variant = 'regular',
    href,
    hrefLang,
    text,
    target,
    ...props
  }, ref) => {
    const { link } = styles({ variant })

    return (
      <a
        className={`${className} ${link}`}
        data-testid={testID}
        ref={ref}
        href={href}
        hrefLang={hrefLang}
        target={target}
        {...props}
      >
        {text}
      </a>
    )
  }
)

export default Link
