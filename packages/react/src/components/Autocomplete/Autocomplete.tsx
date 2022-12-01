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
      size, isFilled: !!value, feedback: feedback, isDisabled: disabled, position: position, readonly: readonly
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
            <div className={menuOptionsWrapper}>
              {
                options?.map((optionItem, index )=>{
                  return(

                    <div 
                     onClick={
                      ()=> {
                        handleSelect?.(optionItem)
                        setMenutoggle(false)
                      }
                      } 
                     key={`${optionItem}-${index}`} 
                     className={optionsItem}
                     >
                      {
                        optionItem.label
                      }
                    </div>
                  )
                })
              }
            </div>
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
