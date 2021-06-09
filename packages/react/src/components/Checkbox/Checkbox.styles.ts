import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  checkbox: {
    appearance: 'none',
    width: theme.size.small,
    height: theme.size.small,
    border: `2px solid ${theme.color.mediumEmphasis}`,
    borderRadius: 2,
    display: 'inline-block',
    position: 'relative',
    '&:disabled': {
      border: `2px solid ${theme.color.lowEmphasis}`
    },
    '&:checked': {
      backgroundColor: theme.color.primary,
      border: `2px solid ${theme.color.primary}`,
      color: theme.color.surface,
      '&:disabled': {
        border: `2px solid ${theme.color.lowEmphasis}`,
        backgroundColor: theme.color.lowEmphasis
      }
    }
  }
}))

export default styles
