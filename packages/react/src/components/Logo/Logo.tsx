import React from 'react'
import { Theme } from '@naturacosmeticos/natds-themes'
import { useTheme } from 'react-jss'
import { buildTheme } from '../../ThemeProvider'
import { LogoProps } from './Logo.props'
import styles from './Logo.styles'

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({
    color = 'neutral',
    size = 'veryHuge',
    model = 'a',
    brand,
    mode,
    languages = 'default',
    arialabel = 'logo',
    className = '',
    ...props
  }, ref) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme: Theme = brand ? buildTheme(brand, mode) : useTheme()
    const { root } = styles({ size, color })

    const checkColor = color === 'neutral' ? 'neutral' : 'custom'
    const logo = languages === 'default' ? theme.asset.brand[checkColor][model].file : (theme.asset.brand[checkColor][model][languages] ?? theme.asset.brand[checkColor][model].file)

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
