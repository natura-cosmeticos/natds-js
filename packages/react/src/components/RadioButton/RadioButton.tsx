import React from 'react'
import { RadioButtonProps } from './RadioButton.props'
import Ripple from '../Ripple'
import { Label } from '../Label'
import styles from './RadioButton.styles'

const RadioButton = ({
  checked = false,
  disabled = false,
  id,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  ref,
  required = false,
  testID = `ds-RadioButton-${id}`,
  value
}: RadioButtonProps): JSX.Element => {
  const {
    radioButton, wrapper, container, labelText
  } = styles({ disabled })

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
        <div className={wrapper} ref={ref}>
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
          />
        </div>
      </Ripple>
      {label && <Label className={labelText} label={label} id={id} />}
    </div>
  )
}

export default RadioButton
