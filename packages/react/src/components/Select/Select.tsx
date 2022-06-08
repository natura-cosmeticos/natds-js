import React from 'react'
import styles from './Select.styles'
import { SelectProps } from './Select.props'
import Label from '../Label'
import Icon from '../Icon'

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (props, ref) => {
    const {
      testID,
      label,
      name,
      placeholder,
      options,
      size = 'mediumX',
      value,
      required = false,
      onChange
    } = props
    const { wrapper, labelText, input } = styles({ size, isFilled: !!value })

    return (
      <div data-testid={testID} ref={ref} className={wrapper}>
        <Label htmlFor={name} label={label} className={labelText} required={required} />

        <select
          value={value}
          name={name}
          id={name}
          className={input}
          onChange={onChange}
          required={required}
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

        <Icon name="outlined-navigation-arrowbottom" />
      </div>
    )
  }
)

export default Select
