import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type StyleProps = {
  color: 'regular' | 'primary',
  isActive: boolean,
  isDisabled: boolean
}

const overlay = (theme: Theme) => ({
  content: '" "',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: theme.color.highlight,
  opacity: theme.opacity.lower
})

const applyOpenStyle = (theme: Theme) => ({ isActive }: StyleProps) => {
  if (isActive) {
    return overlay(theme)
  }

  return {}
}

const applyClickStyle = (theme: Theme) => {
  const baseOverlay = overlay(theme)
  baseOverlay.opacity = theme.opacity.veryLow

  return baseOverlay
}

const setBackgroundColor = (theme: Theme) => ({ isDisabled, color }: StyleProps) => {
  if (isDisabled) {
    return theme.color.lowEmphasis
  }

  return color === 'regular' ? theme.color.surface : theme.color.primary
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: theme.color.surface,
    fontFamily: theme.typography.fontFamily.primary,
    color: ({ isDisabled }: StyleProps) => (
      isDisabled ? theme.color.mediumEmphasis : theme.color.highEmphasis),
    pointerEvents: ({ isDisabled }: StyleProps) => (isDisabled ? 'none' : 'auto')
  },
  header: (props: StyleProps) => ({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${theme.spacing.small}px ${theme.spacing.standard}px`,
    fontWeight: theme.typography.fontWeight.medium,
    position: 'relative',
    background: setBackgroundColor(theme)(props),
    '&:before': {
      ...applyOpenStyle(theme)(props)
    },
    '&:active:after': {
      ...applyClickStyle(theme)
    },
    '&:hover': {
      cursor: 'pointer'
    },
    '&:hover:before': {
      ...overlay(theme)
    }
  }),
  content: {
    minHeight: theme.size.semiX,
    padding: `${theme.spacing.small}px ${theme.spacing.standard}px`,
    fontWeight: theme.typography.fontWeight.regular
  }
}))

export default styles