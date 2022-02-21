import React from 'react'
import IconButtonBase from '../IconButton/IconButtonBase'
import { Label } from '../Label'
import styles from './Shortcut.styles'
import { ShortcutProps } from './Shortcut.props'

const Shortcut = React.forwardRef<HTMLButtonElement, ShortcutProps>(
  (props, ref) => {
    const {
      className = '',
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
      ariaLabelledBy,
      breakLine = true
    } = props
    const {
      container, content, labelText, badgeContainer, wrapper
    } = styles({
      variant, color, disabled, breakLine
    })

    return (
      <div className={wrapper}>
        <div className={container}>
          <IconButtonBase
            className={`${className} ${content}`}
            id={id}
            ref={ref}
            ariaLabel={ariaLabel}
            ariaLabelledBy={ariaLabelledBy}
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
        {label && <Label className={labelText} label={label} htmlFor={id} id={ariaLabelledBy} />}
      </div>
    )
  }
)

export default Shortcut
