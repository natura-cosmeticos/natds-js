import React from 'react'
import { Input, InputHelperText } from '../Input'
import { TextFieldProps } from './TextField.props'
import { Label } from '../Label'
import styles from './TextField.styles'

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({
  disabled = false,
  feedback,
  helperText,
  id,
  brand,
  isResizable = false,
  label,
  minRows = 3,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onKeyUp,
  placeholder,
  readOnly = false,
  required = false,
  size = 'mediumX',
  testID,
  type = 'text',
  value,
  className = '',
  ...rest
}, ref) => {
  const { labelText } = styles({ feedback, disabled, label })

  return (
    <div data-testid={testID} className={className}>
      <Label htmlFor={id} required={required} label={label} className={labelText} />
      <Input
        brand={brand}
        id={id}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        readOnly={readOnly}
        size={size}
        type={type}
        value={value}
        minRows={minRows}
        isResizable={isResizable}
        feedback={feedback}
        ref={ref}
        {...rest}
      />
      <InputHelperText disabled={disabled} feedback={feedback} helperText={helperText} />
    </div>
  )
})

export default TextField
