import React from 'react'
import { RadioButtonProps } from './RadioButton.props'
import Ripple from '../Ripple'
import styles from './RadioButton.styles'

const RadioButton = ({
  checked = false,
  disabled = false,
  id,
  onChange,
  testID = `ds-radio-${id}`,
  value
}: RadioButtonProps): JSX.Element => {
  const { radio, wrapper } = styles({ disabled })

  const getRippleColor = checked && !disabled ? 'primary' : 'highlight'

  return (
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
          className={radio}
          disabled={disabled}
          id={id}
          onChange={onChange}
          type="radio"
          value={value}
        />
      </div>
    </Ripple>
  )
}

export default RadioButton
