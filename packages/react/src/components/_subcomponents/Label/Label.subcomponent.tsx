/* eslint-disable max-len */
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Color, Theme } from '@naturacosmeticos/natds-themes'

export interface LabelSubcomponentProps {
  label: string
  disabled?: boolean
  id?: string
  color?: keyof Color
  fontSize?: number
}

const styles = createUseStyles((theme: Theme) => ({
  label: {
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: ({ fontSize }: LabelSubcomponentProps) => fontSize,
    letterSpacing: 0.22,
    color: ({ disabled, color }: LabelSubcomponentProps) => (color && !disabled ? theme.color[color] : theme.color.lowEmphasis)
  }
}))

const Label = ({
  label,
  disabled = false,
  id,
  color = 'highEmphasis',
  fontSize = 14
}: LabelSubcomponentProps): JSX.Element => {
  const classes = styles({ disabled, color, fontSize })

  return (
    <label htmlFor={id} className={classes.label}>{label}</label>
  )
}

export default Label
