import * as React from 'react'
import { IInputStateHelpTextProviderProps } from './InputStateHelpTextProvider.props'
import { FormHelperText } from '../FormHelperText'
import { InputLabel } from '../InputLabel'
import { FormControl } from '../FormControl'

export { IInputStateHelpTextProviderProps } from './InputStateHelpTextProvider.props'

// eslint-disable-next-line complexity
export const InputStateHelpTextProvider: React.FunctionComponent<IInputStateHelpTextProviderProps> = (props: IInputStateHelpTextProviderProps) => {
  const {
    id,
    label,
    helpText,
    required = false,
    disabled = false,
    state,
    className,
    children,
    readOnly = false
  } = props

  const content = label && required ? `${label} *` : label

  return (
    <FormControl className={className}>
      {content
        && (
        <InputLabel htmlFor={id} error={state === 'error'} disabled={disabled} state={state}>
          {content}
        </InputLabel>
        )}
      {children}
      {!readOnly && helpText
        && (
        <FormHelperText disabled={disabled} error={state === 'error'} state={state}>
          {helpText}
        </FormHelperText>
        )}
    </FormControl>
  )
}

export default InputStateHelpTextProvider
