import React from 'react'
import { Size, Theme } from '@naturacosmeticos/natds-themes'
import { createUseStyles } from 'react-jss'
import { Ripple } from '../Ripple'

export interface IconButtonBaseProps {
  ariaLabel?: string
  className?: string
  disabled?: boolean
  IconComponent: React.ReactElement
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void
  size: keyof Size
  testID?: string
  value?: string | number
  id?: HTMLButtonElement['id']
}

type IconButtonBaseStyleProps = Required<Pick<IconButtonBaseProps, 'size'>>

const styles = createUseStyles((theme: Theme) => ({
  base: {
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    height: ({ size }: IconButtonBaseStyleProps) => theme.size[size],
    justifyContent: 'center',
    outline: 'none',
    width: ({ size }: IconButtonBaseStyleProps) => theme.size[size],
    '&:disabled': { cursor: 'default' }
  }
}))

const IconButtonBase = React.forwardRef<HTMLButtonElement, IconButtonBaseProps>(({
  ariaLabel,
  className,
  disabled,
  IconComponent,
  onClick,
  size,
  testID,
  value,
  id
}, ref) => {
  const { base } = styles({ size })

  return (
    <Ripple disabled={disabled} isCentered>
      <button
        aria-label={ariaLabel}
        className={`${className} ${base}`}
        data-testid={testID}
        disabled={disabled}
        onClick={onClick}
        type="button"
        value={value}
        ref={ref}
        id={id}
      >
        {IconComponent}
      </button>
    </Ripple>
  )
})

export default IconButtonBase
