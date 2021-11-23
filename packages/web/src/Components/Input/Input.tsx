import * as React from 'react'
import { createStyles, makeStyles } from '@material-ui/core'
import MaterialInput from '@material-ui/core/Input'
import clsx from 'clsx'
import { IThemeWeb } from 'Themes'
import { IInputProps } from './Input.props'

export { IInputProps } from './Input.props'

const styles = makeStyles((theme: IThemeWeb) => createStyles({
  input: {
    height: ({ size }: IInputProps) => size && theme.sizes[size],
    '& .MuiInputBase-input': {
      minHeight: ({ size }: IInputProps) => size && theme.sizes[size]
    }
  }
}))

export const Input = React.forwardRef<unknown, IInputProps>(
  (props: IInputProps, ref: IInputProps['ref']) => {
    const {
      className,
      disabled,
      hasIcon,
      multiline,
      rows,
      size = 'mediumX',
      state,
      ...otherProps
    } = props

    const { input } = styles(props)

    return (
      <MaterialInput
        {...otherProps}
        className={clsx(className, input)}
        data-state={state}
        disabled={disabled}
        multiline={multiline}
        ref={ref}
        rows={rows}
        style={{ marginTop: 0 }}
      />
    )
  }
)
Input.displayName = 'Input'
export default Input
