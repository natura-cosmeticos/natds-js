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
    textColor = 'default',
    ...rest
  }, ref) => {
    const { container, link } = styles({
      variant, iconPosition, textColor
    })

    return (
      <span className={container}>
        <a
          className={`${className} ${link} Link-gaya`}
          data-testid={testID}
          ref={ref}
          href={href}
          hrefLang={hrefLang}
          target={target}
          {...rest}
        >
          {text}
        </a>
        {IconComponent && IconComponent}
      </span>
    )
  }
)

export default Link
