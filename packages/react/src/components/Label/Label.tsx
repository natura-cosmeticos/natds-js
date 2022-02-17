import React from 'react'
import styles from './Label.styles'

export interface LabelProps {
  className?: string
  htmlFor?: string
  label?: string
  required?: boolean
  id?: string
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({
  label, htmlFor, className, required, id
}, ref) => {
  const { labelContainer } = styles()
  return (
    <label id={id} htmlFor={htmlFor} className={`${className} ${labelContainer}`} ref={ref}>
      {label}
      {required && label && '*'}
    </label>
  )
})

export default Label
