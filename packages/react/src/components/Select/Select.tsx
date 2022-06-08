import React from 'react'
import styles from './Select.styles'
import { SelectProps } from './Select.props'
import Label from '../Label'
import Icon from '../Icon'

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (props, ref) => {
    const {
      label,
      name,
      options,
      size = 'mediumX',
      testID
    } = props
    const { wrapper, labelText, input } = styles({ size })

    return (
      <div data-testid={testID} ref={ref} className={wrapper}>
        <Label htmlFor={name} label={label} className={labelText} />

        <select name={name} id={name} className={input}>
          <option selected disabled>Placeholder</option>
          {options.map(
            ({ value, label: labelOption }) => (
              <option key={value} value={value}>
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
