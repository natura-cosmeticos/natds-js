import React, { useEffect, useState } from 'react'
import styles from './Autocomplete.styles'
import { AutocompleteProps } from './Autocomplete.props'
import { InputHelperText } from '../Input'
import Icon from '../Icon'

const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (props, ref) => {
    const [menuToggle, setMenutoggle] = useState(false)
    const {
      testID,
      name,
      label,
      size = 'mediumX',
      value,
      options,
      feedback,
      placeholder,
      notFound,
      position,
      readonly = false,
      handleSelect,
      required = false,
      disabled = false,
      helperText,
      onChange,
      className = '',
      ...rest
    } = props

    const {
      wrapper,
      labelText,
      inputWrapper,
      input,
      icon,
      surfaceWrapper,
      menuOptionsWrapper,
      optionsItem
    } = styles({
      size, isFilled: !!value, feedback, isDisabled: disabled, position, readonly
    })

    const handleToggle = () => {
      setMenutoggle(false)
    }

    useEffect(() => {
      document.addEventListener('click', handleToggle, false)
      return () => document.removeEventListener('click', handleToggle, false)
    }, [])

    return (
      <div
        className={`${className} ${wrapper}`}
        data-testid={testID}
        {...rest}
      >
        <label htmlFor={name} className={`${labelText}`}>
          {label}
          {required && '*'}
        </label>

        <div className={inputWrapper}>
          <input
            data-testid="input-search"
            value={value}
            onKeyDown={() => setMenutoggle(true)}
            ref={ref}
            name={name}
            placeholder={placeholder}
            id={name}
            onClick={(e) => {
              e.stopPropagation()
              setMenutoggle(!menuToggle)
            }}
            className={input}
            onChange={onChange}
            required={required}
            disabled={disabled}
            aria-label={labelText}
            readOnly={readonly}
            type="text"
          />

          <Icon size="semi" name={menuToggle ? 'outlined-navigation-arrowtop' : 'outlined-navigation-arrowbottom'} className={icon} />
          {
          menuToggle && (
          <div className={surfaceWrapper}>
            <ul data-testid="ul-options" className={menuOptionsWrapper}>

              {
                options?.map((optionItem, index) => (

                  <li
                    data-testid={`li-options-${index + 1}`}
                    role="option"
                    key={`${optionItem}-${index + 1}`}
                    className={optionsItem}
                    onClick={
                    () => {
                      handleSelect?.(optionItem)
                      setMenutoggle(false)
                    }
                }
                  >
                    {

                    optionItem.value !== 'false' ? optionItem.label : notFound
                  }
                  </li>
                ))

              }
            </ul>
          </div>
          )
          }
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

export default Autocomplete
