import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { CheckboxProps } from './Checkbox.props'

const styles = createUseStyles((theme: Theme) => ({
  checkbox: {
    appearance: 'none',
    border: `2px solid ${theme.color.mediumEmphasis}`,
    borderRadius: 2,
    cursor: 'pointer',
    display: 'inline-block',
    height: 18,
    margin: theme.spacing.micro,
    position: 'relative',
    top: 2,
    width: 18,
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
        fontSize: theme.size.small,
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
  }
}))

export default styles
