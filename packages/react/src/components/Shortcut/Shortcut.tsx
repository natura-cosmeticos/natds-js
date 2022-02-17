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
      variant = 'outlined',
      color = 'primary',
      label,
      IconComponent,
      id = 'shortcut',
      ariaLabelledBy
    } = props
    const { container, content, labelText } = styles({ variant, color, disabled })

    return (
      <span className={container}>
        <IconButtonBase
          id={id}
          ariaLabelledBy={ariaLabelledBy}
          ref={ref}
          ariaLabel={ariaLabel}
          className={`${className} ${content}`}
          disabled={disabled}
          onClick={onClick}
          size="mediumX"
          testID={testID}
          IconComponent={IconComponent}
        />
        {label && <Label className={labelText} label={label} htmlFor={id} id={ariaLabelledBy} />}
      </span>
    )
  }
)

export default Shortcut
