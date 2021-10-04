import React from 'react'

export interface LabelSubcomponentProps {
  label: string
  className?: string
  id?: string
}

const Label = ({
  label, id, className
}: LabelSubcomponentProps): JSX.Element => <label htmlFor={id} className={className}>{label}</label>

export default Label
