import * as React from 'react'
import MaterialSelect from '@material-ui/core/Select'
import { MenuProps } from '@material-ui/core'
import { Icon } from '../Icon'
import { MenuItem } from '../MenuItem'
import InputStateHelpTextProvider from '../InputStateHelpTextProvider'
import {
  DeprecatedOptions, ISelectProps, SelectOptions, UpdatedOptions
} from './Select.props'

export { ISelectProps } from './Select.props'

/**
 * ## Importing
 *
 * ```
 * import { Select } from '@naturacosmeticos/natds-web';
 * ```
 */

export const handleOptions = (selectOptions: SelectOptions) => (
  selectOptions.map((option: DeprecatedOptions | UpdatedOptions) => {
    if (typeof option === 'number' || typeof option === 'string') {
      return { value: option, description: option }
    }
    return option
  })
)

export const Select = React.forwardRef<HTMLSelectElement | HTMLInputElement, ISelectProps>(
  (props: ISelectProps, ref) => {
    const {
      defaultValue,
      id,
      onChange,
      onClose,
      onOpen,
      options,
      placeholder,
      state,
      value,
      ...rest
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
      <InputStateHelpTextProvider {...rest} state={state}>
        <MaterialSelect
          {...props}
          data-state={state}
          defaultValue={defaultValue}
          displayEmpty
          IconComponent={(props) => (<Icon name="outlined-navigation-arrowbottom" {...props} />)}
          id={id}
          MenuProps={menuProps}
          onChange={onChange}
          onClose={onClose}
          onOpen={onOpen}
          ref={ref}
          value={value}
        >
          {placeholder && (
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
          )}
          {handleOptions(options)?.map((option, index) => (
            <MenuItem value={option.value} key={index}>
              {option.description}
            </MenuItem>
          ))}
        </MaterialSelect>
      </InputStateHelpTextProvider>
    )
  }
)

Select.displayName = 'Select'

export default Select
