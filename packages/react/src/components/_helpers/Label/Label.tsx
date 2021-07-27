/* eslint-disable max-len */
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  label: {
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 14,
    letterSpacing: 0.22,
    color: ({ disabled }: LabelProps) => (disabled ? theme.color.lowEmphasis : theme.color.highEmphasis)
  }
}))

export interface LabelProps {
  text: string
  disabled?: boolean
  id?: string
}

const Label = ({ text, disabled = false, id }: LabelProps): JSX.Element => {
  const { label } = styles({ disabled })

  return (
    <label htmlFor={id} className={label}>{text}</label>
  )
}

export default Label
