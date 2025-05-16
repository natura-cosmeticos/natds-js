/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react'
import { Ripple } from '../Ripple'
import { Label } from '../Label'
import { CheckboxProps } from './Checkbox.props'
import styles from './Checkbox.styles'

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
  checked = false,
  className = '',
  disabled = false,
  id,
  brand,
  indeterminate = false,
  onChange,
  testID = `ds-checkbox-${id}`,
  value,
  label
}, ref) => {
  const {
    checkbox, wrapper, container, labelText
  } = styles({ indeterminate, disabled, brand })

  const getRippleColor = checked && !disabled ? 'primary' : 'highlight'
  const inputRef = useRef<HTMLInputElement>(null)

  const handleRippleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      return
    }

    if (onChange) {
      if (inputRef.current) {
        inputRef.current.focus()
      }
      onChange(event as any)
    }
  }

  return (
    <div className={`${className} ${container} Checkbox-gaya`}>
      <Ripple
        isCentered
        brand={brand}
        hideOverflow={false}
        disabled={disabled}
        color={getRippleColor}
        animationDuration={500}
        radius="50%"
        onClick={handleRippleClick}
        showHover
        focus
      >
        <div className={wrapper}>
          <input
            data-testid={testID}
            checked={checked}
            className={checkbox}
            disabled={disabled}
            id={id}
            onChange={onChange}
            type="checkbox"
            value={value}
            ref={ref || inputRef}
          />
        </div>
      </Ripple>
      {label && <Label className={labelText} label={label} htmlFor={id} />}
    </div>
  )
})

export default Checkbox
