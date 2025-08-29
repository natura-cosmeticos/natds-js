import React from 'react'
import styles from './Switch.styles'
import { SwitchProps } from './Switch.props'

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className = '',
      id = 'toggleSwitch',
      value,
      brand,
      checked = false,
      disabled = false,
      onChange,
      testID,
      accessibilityLabel,
      ...rest
    },
    ref
  ) => {
    const {
      switchContainer, switchBase, switchInput, switchTrack, switchOverlay, switchThumb
    } = styles({ checked, disabled, brand })

    const handleBlur = () => {
      document.getElementById(id)?.blur()
    }

    return (
      <span className={`${className} ${switchContainer} Switch-gaya`}>
        <input
          ref={ref}
          id={id}
          data-testid={testID}
          className={switchInput}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          value={value}
          onChange={onChange}
          {...rest}
        />

        <label
          onMouseLeave={handleBlur}
          className={switchBase}
          htmlFor={id}
          {...accessibilityLabel}
        >
          <span className={switchTrack} />
          <span className={switchOverlay} />
          <span className={switchThumb} />
        </label>
      </span>
    )
  }
)

export default Switch
