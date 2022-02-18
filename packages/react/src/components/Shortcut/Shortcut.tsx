import React from 'react'
import IconButtonBase from '../IconButton/IconButtonBase'
import { Label } from '../Label'
import styles from './Shortcut.styles'
import { ShortcutProps } from './Shortcut.props'
import Badge from '../Badge'

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
      id,
      ariaLabelledBy,
      notify = false,
      value = 99,
      limit
    } = props
    const {
      container, content, labelText, badgeContainer, wrapper
    } = styles({ variant, color, disabled })

    return (
      <div className={wrapper}>
        <span className={container}>
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
          {notify && <Badge className={badgeContainer} variant="standard" value={value} limit={limit} />}
        </span>
        {label && <Label className={labelText} label={label} htmlFor={id} id={ariaLabelledBy} />}
      </div>
    )
  }
)

export default Shortcut
