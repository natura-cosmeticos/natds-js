import * as React from 'react'
import MaterialSelect from '@material-ui/core/Select'
import { MenuProps } from '@material-ui/core'
import { Icon } from '../Icon'
import { MenuItem } from '../MenuItem'
import InputStateHelpTextProvider from '../InputStateHelpTextProvider'
import { ISelectProps } from './Select.props'

export { ISelectProps } from './Select.props'

/**
 * ## Importing
 *
 * ```
 * import { Select } from '@naturacosmeticos/natds-web';
 * ```
 */

export const Select = React.forwardRef<HTMLSelectElement | HTMLInputElement, ISelectProps>(
  (props: ISelectProps, ref) => {
    const {
      state, id, placeholder, options, onChange, value, ...otherProps
    } = props

    const menuProps: Partial<MenuProps> = {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
      },
      getContentAnchorEl: null
    }

    return (
      <InputStateHelpTextProvider {...otherProps} state={state}>
        <MaterialSelect
          {...props}
          id={id}
          displayEmpty
          IconComponent={(props) => (<Icon name="outlined-navigation-arrowbottom" {...props} />)}
          onChange={onChange}
          value={value}
          defaultValue={placeholder}
          ref={ref}
          MenuProps={menuProps}
          data-state={state}
        >
          {placeholder && (
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
          )}
          {options?.map((option, index) => (
            <MenuItem value={option} key={index}>
              {option}
            </MenuItem>
          ))}
        </MaterialSelect>
      </InputStateHelpTextProvider>
    )
  }
)

Select.displayName = 'Select'

export default Select
