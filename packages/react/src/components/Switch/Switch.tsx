import React from 'react'
import styles from './Switch.styles'
import { SwitchProps } from './Switch.props'

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className = '',
      id = 'toggleSwitch',
      value,
      checked = false,
      disabled = false,
      onChange,
      testID
    },
    ref
  ) => {
    const {
      switchContainer, switchBase, switchInput, switchTrack, switchOverlay, switchThumb
    } = styles({ checked, disabled })

    const handleBlur = () => {
      document.getElementById(id)?.blur()
    }

    return (
      <span className={`${className} ${switchContainer}`}>
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
        />

        <label onMouseLeave={handleBlur} className={switchBase} htmlFor={id}>
          <span className={switchTrack} />
          <span className={switchOverlay} />
          <span className={switchThumb} />
        </label>
      </span>
    )
  }
)

export default Switch
