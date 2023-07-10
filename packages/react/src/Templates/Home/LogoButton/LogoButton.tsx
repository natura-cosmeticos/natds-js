import React from 'react'
import { LogoButtonProps } from './LogoButton.props'
import styles from './LogoButton.styles'
import { buildTheme } from '../../../ThemeProvider'

const LogoButton = React.forwardRef<HTMLDivElement, LogoButtonProps>(
  ({
    brand, isActive, color = 'neutral', size = 'mediumX', model = 'a', onClick
  }, ref) => {
    const { wrapper, root } = styles({
      brand, isActive, color, size, model
    })
    const themeBrand = buildTheme(brand, 'light')
    const checkColor = color === 'neutral' ? 'neutral' : 'custom'
    const logo = themeBrand.asset.brand[checkColor][model].file
    return (
      <div onClick={onClick} ref={ref} className={wrapper}>
        <div
          className={`${root}`}
        // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: logo }}
          ref={ref}
          role="img"
        />
      </div>
    )
  }
)
export default LogoButton
