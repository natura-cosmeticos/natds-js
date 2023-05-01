import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

export interface StepBarProps2 {
    position: string
}

type RuleNames =
  | 'wrapper'
  | 'container'
  | 'circlo'
  | 'spanText'

const getBackground = (theme: Theme) => ({ position }: StepBarProps2) => {
  if (position === 'true') {
    return { bk: theme.color.primary, fontColor: theme.color.highEmphasis }
  }

  return { bk: theme.color.lowEmphasis, fontColor: theme.color.lowEmphasis }
}

const styles = createUseStyles<RuleNames, StepBarProps2, Theme>((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: 4
  },
  circlo: {
    display: 'flex',
    flexShrink: '0',
    borderRadius: '50%',
    boxSizing: 'border-box',
    padding: 1,
    backgroundColor: ({ position }) => getBackground(theme)({ position }).bk
  },
  spanText: {
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    fontSize: theme.typography.fontSize.level1,
    color: ({ position }) => getBackground(theme)({ position }).fontColor
  },
  '@media screen and (max-width: 780px)': {
    wrapper: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      gap: 'unset'
    }
  }
}))

export default styles
