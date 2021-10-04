/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { CheckboxProps } from './Checkbox.props'

const styles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  wrapper: {
    height: theme.size.semiX,
    width: theme.size.semiX,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkbox: {
    appearance: 'none',
    border: `2px solid ${theme.color.mediumEmphasis}`,
    borderRadius: 2,
    cursor: 'pointer',
    display: 'inline-block',
    height: 18,
    margin: 0,
    position: 'relative',
    width: 18,
    '&:focus': {
      outline: 'none'
    },
    '&:disabled': {
      border: `2px solid ${theme.color.lowEmphasis}`,
      cursor: 'default'
    },
    '&:checked': {
      backgroundColor: theme.color.primary,
      border: `2px solid ${theme.color.primary}`,
      color: theme.color.surface,
      '&:after': {
        content: ({ indeterminate }: CheckboxProps) => (indeterminate ? '"\uea5d"' : '"\uea3c"'),
        display: 'block',
        fontFamily: 'natds-icons',
        fontSize: 18,
        left: '50%',
        position: 'absolute',
        textAlign: 'center',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      },
      '&:disabled': {
        backgroundColor: theme.color.lowEmphasis,
        border: `2px solid ${theme.color.lowEmphasis}`
      }
    }
  },
  labelText: {
    color: ({ disabled }: CheckboxProps) => (disabled ? theme.color.lowEmphasis : theme.color.highEmphasis),
    fontFamily: [theme.checkbox.label.primary.fontFamily, theme.checkbox.label.fallback.fontFamily],
    fontSize: theme.checkbox.label.fontSize,
    fontWeight: theme.checkbox.label.primary.fontWeight,
    letterSpacing: theme.checkbox.label.letterSpacing,
    lineHeight: theme.checkbox.label.lineHeight
  }
}))

export default styles
