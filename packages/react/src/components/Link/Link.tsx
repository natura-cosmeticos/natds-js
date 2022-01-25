import React from 'react'
import { LinkProps } from './Link.props'
import styles from './Link.styles'

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({
    className = '',
    testID,
    variant = 'underline',
    href,
    hrefLang,
    text,
    target,
    iconPosition = 'right',
    IconComponent,
    textColor = 'default'
  }, ref) => {
    const { container, link } = styles({
      variant, iconPosition, textColor
    })

    return (
      <span className={container}>
        <a
          className={`${className} ${link}`}
          data-testid={testID}
          ref={ref}
          href={href}
          hrefLang={hrefLang}
          target={target}
        >
          {text}
        </a>
        {IconComponent && IconComponent}
      </span>
    )
  }
)

export default Link
