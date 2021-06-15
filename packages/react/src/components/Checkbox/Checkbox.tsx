import React from 'react'
import { CheckboxProps } from './Checkbox.props'
import Ripple from '../Ripple'
import styles from './Checkbox.styles'

const Checkbox = ({
  checked = false,
  disabled = false,
  id,
  indeterminate = false,
  onChange,
  testID = `ds-checkbox-${id}`,
  value
}: CheckboxProps): JSX.Element => {
  const { checkbox, wrapper } = styles({ indeterminate })

  const getRippleColor = checked ? 'primary' : 'highlight'

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
          className={checkbox}
          disabled={disabled}
          id={id}
          onChange={onChange}
          type="checkbox"
          value={value}
        />
        <label htmlFor={id} />
      </div>
    </Ripple>
  )
}

export default Checkbox
