import React from 'react'
import styles from './Select.styles'
import { SelectProps } from './Select.props'
import Label from '../Label'
import Icon from '../Icon'
import { InputHelperText } from '../Input'

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (props, ref) => {
    const {
      testID,
      label,
      name,
      placeholder,
      options,
      size = 'mediumX',
      helperText,
      value,
      feedback,
      required = false,
      disabled = false,
      onChange
    } = props
    const {
      wrapper, labelText, inputWrapper, input
    } = styles({
      size, isFilled: !!value, feedback, isDisabled: disabled
    })

    return (
      <div data-testid={testID} ref={ref} className={wrapper}>
        <Label htmlFor={name} label={label} className={labelText} required={required} />

        <div className={inputWrapper}>
          <select
            value={value}
            name={name}
            id={name}
            className={input}
            onChange={onChange}
            required={required}
            disabled={disabled}
          >
            {!!placeholder && <option selected disabled>{placeholder}</option>}

            {options.map(
              ({ value: valueOption, label: labelOption }) => (
                <option key={valueOption} value={valueOption}>
                  {labelOption}
                </option>
              )
            )}
          </select>

          <Icon size="semi" name="outlined-navigation-arrowbottom" />
        </div>

        {!!helperText
          && (
          <InputHelperText
            helperText={helperText}
            feedback={feedback}
            disabled={disabled}
          />
          )}
      </div>
    )
  }
)

export default Select
