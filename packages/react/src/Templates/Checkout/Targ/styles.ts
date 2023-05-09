/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type RuleNames =
  | 'container'
  | 'targ'
  | 'title'

export interface TargProps {
    back: string
    top: number
    size: 'small' | 'medium'
  }

const handleSize = (size: string) => {
  switch (size) {
    case 'small':
      return 8
    case 'medium':
      return 40
    default:
      return 8
  }
}

const styles = createUseStyles<RuleNames, TargProps, Theme>((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    position: 'absolute',
    // backgroundColor: theme.color.surface,
    gap: 8,
    top: ({ top }) => (top || 24),
    left: 0,
    zIndex: 999
    // border: '1px solid green'
  },
  targ: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: ({ size }) => handleSize(size),
    height: 16,
    color: theme.color.onPrimary,
    fontSize: 12,
    borderRadius: [0, 4, 4, 0],
    backgroundColor: ({ back }) => (back !== 'none' ? back : theme.color.primary)
  },
  title: {
    textTransform: 'capitalize'
  }
}))

export default styles
