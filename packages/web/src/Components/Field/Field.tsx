/* eslint-disable complexity */
import * as React from 'react'
import MaskedInput from 'react-text-mask'
import PasswordReveal from './PasswordReveal'
import SearchClear from './SearchClear'
import CustomIcon from './CustomIcon'
import { ITextFieldProps } from '../TextField'
import { IInputProps, Input } from '../Input'

export const TEXT_TYPE = 'text'
export const SEARCH_TYPE = 'search'
export const PASSWORD_TYPE = 'password'

export const Field = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, ITextFieldProps>(

  (props: ITextFieldProps, ref) => {
    const {
      className,
      disabled = false,
      guide,
      helpText,
      hidePasswordIcon,
      icon,
      id,
      label,
      mask,
      maxLength,
      multiline,
      onBlur,
      onChange,
      onClearSearch,
      onFocus,
      onIconPress,
      placeholder = '',
      placeholderChar,
      required = false,
      searchIcon,
      showPasswordIcon,
      state,
      theme: providedTheme,
      type,
      value,
      ...otherProps
    } = props

    let fieldType: IInputProps['inputComponent'] = 'input'

    if (multiline) {
      fieldType = 'textarea'
    } else if (mask) {
      fieldType = MaskedInput
    }

    const [showing, togglePasswordReveal] = React.useState(false)
    const customType = showing ? TEXT_TYPE : type
    const showPasswordReveal = type === PASSWORD_TYPE && !icon
    const showSearchClear = type === SEARCH_TYPE && !icon
    const hasIcon = Boolean(showPasswordReveal) || Boolean(showSearchClear) || Boolean(icon)

    let endAdornment: React.ReactNode = null

    if (showPasswordReveal) {
      endAdornment = (
        <PasswordReveal
          hidePasswordIcon={hidePasswordIcon}
          onTogglePasswordReveal={togglePasswordReveal}
          showing={showing}
          showPasswordIcon={showPasswordIcon}
        />
      )
    }
    if (showSearchClear) {
      endAdornment = (
        <SearchClear
          onClearSearch={onClearSearch}
          searchIcon={searchIcon}
        />
      )
    }
    if (icon) {
      // @ts-ignore
      endAdornment = <CustomIcon icon={icon} onIconPress={onIconPress} />
    }

    return (
      <Input
        disabled={disabled}
        endAdornment={endAdornment}
        hasIcon={hasIcon}
        id={id}
        inputComponent={fieldType}
        inputProps={{
          className: className && `${className}__input`,
          mask,
          guide,
          maxLength,
          placeholderChar
        }}
        multiline={multiline}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        ref={ref}
        required={required}
        state={state}
        type={customType || TEXT_TYPE}
        value={value}
        disableUnderline
        {...otherProps}
      />
    )
  }
)

Field.displayName = 'Field'

export default Field
