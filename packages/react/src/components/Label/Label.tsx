import React from 'react'

export interface LabelProps {
  className?: string
  htmlFor?: string
  label?: string
  required?: boolean
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({
  label, htmlFor, className, required
}, ref) => (
  <label htmlFor={htmlFor} className={className} ref={ref}>
    {label}
    {required && label && '*'}
  </label>
))

export default Label
