import React from 'react'
import styles from './Shortcut.styles'
import IconButtonBase from '../IconButton/IconButtonBase'
import { Label } from '../Label'
import { ShortcutProps } from './Shortcut.props'

const Shortcut = React.forwardRef<HTMLButtonElement, ShortcutProps>(
  (props, ref) => {
    const {
      className = '',
      brand,
      ariaLabel,
      disabled = false,
      onClick,
      testID,
      variant = 'contained',
      color = 'primary',
      label,
      IconComponent,
      BadgeComponent,
      id,
      breakLine = true
    } = props
    const {
      container, content, labelText, badgeContainer, wrapper
    } = styles({
      variant, color, disabled, breakLine, brand
    })

    return (
      <div className={`${wrapper} Shortcut-gaya`}>
        <div className={container}>
          <IconButtonBase
            className={`${className} ${content}`}
            id={id}
            ref={ref}
            ariaLabel={ariaLabel}
            disabled={disabled}
            onClick={onClick}
            size="mediumX"
            testID={testID}
            IconComponent={IconComponent}
          />
          {BadgeComponent
            && (
            <div className={badgeContainer}>
              {BadgeComponent}
            </div>
            )}
        </div>
        {label && <Label className={labelText} label={label} htmlFor={id} />}
      </div>
    )
  }
)

export default Shortcut
