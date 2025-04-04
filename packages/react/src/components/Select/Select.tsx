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
      brand,
      placeholder,
      options,
      size = 'mediumX',
      helperText,
      value,
      feedback,
      required = false,
      disabled = false,
      ariaLabel,
      accessibility,
      onChange
    } = props
    const {
      wrapper, labelText, inputWrapper, input, icon
    } = styles({
      size, isFilled: !!value, feedback, isDisabled: disabled, brand
    })

    return (
      <div data-testid={testID} ref={ref} className={`${wrapper} Select-gaya`}>
        <Label htmlFor={name} label={label} className={labelText} required={required} />

        <div className={inputWrapper}>
          <select
            {...accessibility}
            value={value}
            name={name}
            id={name}
            className={input}
            onChange={onChange}
            required={required}
            disabled={disabled}
            aria-label={ariaLabel}
          >
            {!!placeholder && <option data-testid="placeholder-option" selected disabled>{placeholder}</option>}

            {options.map(
              ({ value: valueOption, label: labelOption }) => (
                <option key={valueOption} value={valueOption} selected={valueOption === value}>
                  {labelOption}
                </option>
              )
            )}
          </select>

          <Icon size="semi" name="outlined-navigation-arrowbottom" className={icon} />
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
