import React from 'react'
import { Ripple } from '../Ripple'
import { Label } from '../Label'
import { CheckboxProps } from './Checkbox.props'
import styles from './Checkbox.styles'

const Checkbox = ({
  checked = false,
  disabled = false,
  id,
  indeterminate = false,
  onChange,
  testID = `ds-checkbox-${id}`,
  value,
  label
}: CheckboxProps): JSX.Element => {
  const {
    checkbox, wrapper, container, labelText
  } = styles({ indeterminate, disabled })

  const getRippleColor = checked && !disabled ? 'primary' : 'highlight'

  return (
    <div className={container}>
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
          />
        </div>
      </Ripple>
      {label && <Label className={labelText} label={label} id={id} />}
    </div>
  )
}

export default Checkbox
