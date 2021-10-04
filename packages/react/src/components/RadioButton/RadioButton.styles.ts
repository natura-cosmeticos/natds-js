/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { RadioButtonProps } from './RadioButton.props'

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    height: theme.size.semiX,
    width: theme.size.semiX,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioButton: {
    appearance: 'none',
    border: `2px solid ${theme.color.mediumEmphasis}`,
    borderRadius: '50%',
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
      border: `2px solid ${theme.color.primary}`,
      backgroundColor: theme.color.surface,
      '&:after': {
        content: '""',
        display: 'inline-block',
        fontSize: 18,
        borderRadius: '50%',
        width: 8,
        height: 8,
        left: '50%',
        position: 'absolute',
        textAlign: 'center',
        backgroundColor: ({ disabled }: RadioButtonProps) => (disabled ? theme.color.lowEmphasis : theme.color.primary),
        top: '50%',
        transform: 'translate(-50%, -50%)'
      },
      '&:disabled': {
        border: `2px solid ${theme.color.lowEmphasis}`
      }
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  labelText: {
    color: ({ disabled }: RadioButtonProps) => (disabled ? theme.color.lowEmphasis : theme.color.highEmphasis),
    fontFamily: [theme.radioButton.label.primary.fontFamily, theme.radioButton.label.fallback.fontFamily],
    fontSize: theme.radioButton.label.fontSize,
    fontWeight: theme.radioButton.label.primary.fontWeight,
    letterSpacing: theme.radioButton.label.letterSpacing,
    lineHeight: theme.radioButton.label.lineHeight
  }
}))

export default styles
