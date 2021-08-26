import React from 'react'
import { Size, Theme } from '@naturacosmeticos/natds-themes'
import { createUseStyles } from 'react-jss'
import { Ripple } from '../Ripple'

export interface ButtonBaseProps {
  classes?: string
  disabled?: boolean
  fullWidth?: boolean
  onClick: (e?: any) => void
  size: keyof Size
  testID?: string
  value?: string
  children: React.ReactNode
}

const styles = createUseStyles((theme: Theme) => ({
  base: {
    border: 'none',
    cursor: 'pointer',
    height: ({ size }: ButtonBaseProps) => size && theme.size[size],
    outline: 0,
    width: ({ fullWidth }: ButtonBaseProps) => (fullWidth ? '100%' : 'auto'),
    '&:disabled': {
      cursor: 'default'
    }
  }
}))

const ButtonBase = ({
  children,
  classes,
  disabled,
  fullWidth = false,
  onClick,
  size,
  testID,
  value
}: ButtonBaseProps): JSX.Element => {
  const { base } = styles({ fullWidth, size })

  return (
    <Ripple disabled={disabled} fullWidth={fullWidth}>
      <button
        className={`${base} ${classes}`}
        data-testid={testID}
        disabled={disabled}
        onClick={onClick}
        type="button"
        value={value}
      >
        {children}
      </button>
    </Ripple>
  )
}

export default ButtonBase
