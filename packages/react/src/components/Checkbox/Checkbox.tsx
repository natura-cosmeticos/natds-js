import React from 'react'
import { Ripple } from '../Ripple'
import { Label } from '../Label'
import { CheckboxProps } from './Checkbox.props'
import styles from './Checkbox.styles'

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
  checked = false,
  className = '',
  disabled = false,
  id,
  indeterminate = false,
  onChange,
  testID = `ds-checkbox-${id}`,
  value,
  label
}, ref) => {
  const {
    checkbox, wrapper, container, labelText
  } = styles({ indeterminate, disabled })

  const getRippleColor = checked && !disabled ? 'primary' : 'highlight'

  return (
    <div className={`${className} ${container}`}>
      <Ripple
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
            data-testid={testID}
            checked={checked}
            className={checkbox}
            disabled={disabled}
            id={id}
            onChange={onChange}
            type="checkbox"
            value={value}
            ref={ref}
          />
        </div>
      </Ripple>
      {label && <Label className={labelText} label={label} htmlFor={id} />}
    </div>
  )
})

export default Checkbox
