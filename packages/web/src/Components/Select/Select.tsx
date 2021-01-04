import * as React from 'react';
import MaterialSelect from '@material-ui/core/Select';
import { Icon } from '../Icon';
import { MenuItem } from '../MenuItem';
import InputStateHelpTextProvider from '../InputStateHelpTextProvider';
import { ISelectProps } from './Select.props';
import { MenuProps } from '@material-ui/core';

export { ISelectProps } from './Select.props';

/**
 * ## Importing
 *
 * ```
 * import { Select } from '@naturacosmeticos/natds-web';
 * ```
 */

export const Select = React.forwardRef<HTMLSelectElement | HTMLInputElement, ISelectProps>(
  (props: ISelectProps, ref) => {

    const { state, id, placeholder, options, ...otherProps } = props;

    const [value, setValue] = React.useState('');
    
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setValue(event.target.value as string);
    };

    const menuProps: Partial<MenuProps> = {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      getContentAnchorEl: null,
    };
    return (
      <InputStateHelpTextProvider {...otherProps} state={state}>
        <MaterialSelect
          {...props}
          id={id}
          displayEmpty
          IconComponent={(props) => (<Icon name="outlined-navigation-arrowbottom" {...props} />)}
          onChange={handleChange}
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
    );
});

Select.displayName = 'Select';

export default Select;
