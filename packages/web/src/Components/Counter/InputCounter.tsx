/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'
import { ITextFieldProps, TextField } from '../TextField'

export { ICounterProps } from './Counter.props'

export const InputCounter = ({ value, className, onChange }: Pick<ITextFieldProps, 'value' | 'className' | 'onChange'>) => (
  <TextField
    color="secondary"
    value={value}
    className={className}
    type="number"
    onChange={onChange}
  />
)

export default InputCounter
