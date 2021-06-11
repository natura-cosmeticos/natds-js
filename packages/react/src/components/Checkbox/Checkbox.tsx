import React from 'react'
import { CheckboxProps } from './Checkbox.props'
import Ripple from '../Ripple'
import styles from './Checkbox.styles'

const Checkbox = ({
  checked = false,
  disabled = false,
  id,
  onChange,
  value,
  indeterminate = false
}: CheckboxProps): JSX.Element => {
  const { checkbox } = styles({ indeterminate })

  const getRippleColor = checked ? 'primary' : 'highlight'

  return (
    <Ripple isCentered hideOverflow={false} disabled={disabled} color={getRippleColor}>
      <input
        data-testid={`ds-checkbox-${id}`}
        checked={checked}
        className={checkbox}
        disabled={disabled}
        id={id}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <label htmlFor={id} />
    </Ripple>
  )
}

export default Checkbox
