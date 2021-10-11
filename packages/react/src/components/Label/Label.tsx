import React from 'react'

export interface LabelProps {
  className?: string
  id?: string
  label?: string
  required?: boolean
}

const Label = ({
  label, id, className, required
}: LabelProps): JSX.Element => (
  <label htmlFor={id} className={className}>
    {label}
    {required && label && '*'}
  </label>
)

export default Label
