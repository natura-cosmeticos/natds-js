import React, {useEffect, useState} from 'react'
import styles from './Autocomplete.styles'
import { AutocompleteProps } from './Autocomplete.props'
import Label from '../Label'
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

    const { wrapper, 
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

    const handleToggle = ()=>{
      setMenutoggle(false)
    }

    useEffect(()=>{
      document.addEventListener('click',handleToggle, false)
      return ()=> document.removeEventListener('click',handleToggle, false)
    },[])

    return (
      <div
        className={`${className} ${wrapper}`}
        data-testid={testID}
        
        {...rest}
      >
        <Label htmlFor={name} label={label} className={labelText} required={required} />
        <div className={inputWrapper}>
          <input
            data-testid="input-search"
            value={value}
            onKeyDown={()=> setMenutoggle(true)}
            ref={ref}
            name={name}
            placeholder={placeholder}
            id={name}
            onClick={(e)=> {
              e.stopPropagation()
              setMenutoggle(!menuToggle)}
            }
            className={input}
            onChange={onChange}
            required={required}
            disabled={disabled}
            aria-label={labelText}
            readOnly={readonly}
            type="text" 
          />

        <Icon size="semi" name={menuToggle ? 'outlined-navigation-arrowtop': 'outlined-navigation-arrowbottom'} className={icon} />
        {
          options && menuToggle &&
          <div className={surfaceWrapper}>
            <ul className={menuOptionsWrapper}>
              {
                options.length > 0 ?
                options.map((optionItem, index )=>{
                  return(

                    <li
                      role={'option'}
                      key={`${optionItem}-${index}`}
                      className={optionsItem}
                      onClick={
                      ()=> {
                        handleSelect?.(optionItem)
                        setMenutoggle(false)
                      }
                      } 
                     
                     >
                      {
                        optionItem.label
                      }
                    </li>
                  )
                }): <li className={optionsItem}> Item não encontrado</li>
              }
            </ul>
          </div>
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
