/* eslint-disable max-lines-per-function */
import React from 'react'
import { Ripple } from '../Ripple'
import { Label } from '../Label'
import { RadioButtonProps } from './RadioButton.props'
import styles from './RadioButton.styles'

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(({
  checked = false,
  className = '',
  disabled = false,
  id,
  brand,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  required = false,
  testID = `ds-RadioButton-${id}`,
  value
}, ref) => {
  const {
    radioButton, wrapper, container, labelText
  } = styles({ disabled, brand })

  const getRippleColor = checked && !disabled ? 'primary' : 'highlight'

  return (
    <div className={`${className} ${container} RadioButton-gaya`}>
      <Ripple
        brand={brand}
        isCentered
        hideOverflow={false}
        disabled={disabled}
        color={getRippleColor}
        animationDuration={500}
        showHover
        focus
      >
        <div className={wrapper}>
          <input
            checked={checked}
            className={radioButton}
            data-testid={testID}
            disabled={disabled}
            id={id}
            name={name}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange}
            type="radio"
            value={value}
            required={required}
            ref={ref}
          />
        </div>
      </Ripple>
      {label && <Label className={labelText} label={label} htmlFor={id} />}
    </div>
  )
})

export default RadioButton
