import React from 'react'
import { Size, Theme } from '@naturacosmeticos/natds-themes'
import { createUseStyles } from 'react-jss'
import { Ripple } from '../Ripple'

export interface IconButtonBaseProps {
  ariaLabel?: string
  classes?: string
  disabled?: boolean
  IconComponent: React.ReactElement
  onClick: (e?: any) => void
  size: keyof Size
  testID?: string
  value?: string | number
}

const styles = createUseStyles((theme: Theme) => ({
  base: {
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    height: ({ size }: IconButtonBaseProps) => theme.size[size],
    justifyContent: 'center',
    outline: 'none',
    width: ({ size }: IconButtonBaseProps) => theme.size[size],
    '&:disabled': { cursor: 'default' }
  }
}))

const IconButtonBase = ({
  ariaLabel, classes, disabled, IconComponent, onClick, size, testID, value
}: IconButtonBaseProps): JSX.Element => {
  const { base } = styles({ size })

  return (
    <Ripple disabled={disabled} isCentered>
      <button
        aria-label={ariaLabel}
        className={`${base} ${classes}`}
        data-testid={testID}
        disabled={disabled}
        onClick={onClick}
        type="button"
        value={value}
      >
        {IconComponent}
      </button>
    </Ripple>
  )
}

export default IconButtonBase
