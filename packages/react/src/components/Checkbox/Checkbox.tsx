import React from 'react'
import { CheckboxProps } from './Checkbox.props'
import styles from './Checkbox.styles'

const Checkbox = ({
  checked = false,
  disabled = false,
  id,
  onChange,
  variant = 'standard'
}: CheckboxProps): JSX.Element => {
  const { checkbox } = styles({ variant })

  return (
    <label htmlFor={id}>
      <input type="checkbox" className={checkbox} disabled={disabled} id={id} checked={checked} onChange={onChange} />
    </label>
  )
}

export default Checkbox
