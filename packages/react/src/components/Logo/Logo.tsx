import React from 'react'
import { Theme } from '@naturacosmeticos/natds-themes'
import { useTheme } from 'react-jss'
import { LogoProps } from './Logo.props'
import styles from './Logo.styles'

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({
    color = 'neutral',
    size = 'veryHuge',
    model = 'a',
    arialabel = 'logo',
    className = '',
    ...props
  }, ref) => {
    const theme: Theme = useTheme()
    const { root } = styles({ size, color })

    const checkColor = color === 'neutral' ? 'neutral' : 'custom'
    const logo = theme.asset.brand[checkColor][model].file

    return (
      <div
        aria-label={arialabel}
        className={`${className} ${root}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: logo }}
        ref={ref}
        role="img"
        {...props}
      />
    )
  }
)

export default Logo
