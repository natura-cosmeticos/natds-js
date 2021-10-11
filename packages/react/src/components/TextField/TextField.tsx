import React from 'react'
import { Input } from '../Input'
import { InputHelperText } from '../Input/InputHelperText'
import { TextFieldProps } from './TextField.props'
import { Label } from '../Label'
import styles from './TextField.styles'

const TextField = (props: TextFieldProps): JSX.Element => {
  const {
    disabled = false,
    feedback,
    helperText,
    id,
    isResizable = false,
    label,
    minRows = 3,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    readOnly = false,
    required = false,
    size = 'mediumX',
    testID,
    type = 'text',
    value,
    ...rest
  } = props

  const { labelText } = styles({ feedback, disabled, label })

  return (
    <div data-testid={testID}>
      <Label id={id} required={required} label={label} className={labelText} />
      <Input
        id={id}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        readOnly={readOnly}
        size={size}
        type={type}
        value={value}
        minRows={minRows}
        isResizable={isResizable}
        feedback={feedback}
        {...rest}
      />
      <InputHelperText disabled={disabled} feedback={feedback} helperText={helperText} />
    </div>
  )
}

export default TextField
