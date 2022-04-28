import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TabItemProps } from './TabItem.props'

type TabButtonProps = Required<Pick<TabItemProps, 'isActive' | 'isDisabled'>>

const toggleColorEmphasis = (theme: Theme) => ({ isActive, isDisabled }: TabButtonProps) => {
  if (isActive) {
    return theme.color.highEmphasis
  }

  if (isDisabled) {
    return theme.color.lowEmphasis
  }

  return theme.color.mediumEmphasis
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    minWidth: theme.size.largeX,
    height: '100%',
    padding: `0 ${theme.spacing.small}px`,
    borderBottom: (props: TabButtonProps) => props.isActive && `2px solid ${theme.color.primary}`,
    pointerEvents: 'none',
    '& > div': {
      height: '100%'
    },
    '&:hover': {
      background: `${theme.color.highlight}29`
    }
  },
  tabButton: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.tiny,
    border: 'none',
    textTransform: 'uppercase',
    background: 'none',
    cursor: (props: TabButtonProps) => (props.isDisabled ? 'not-allowed' : 'pointer'),
    pointerEvents: (props: TabButtonProps) => (props.isDisabled ? 'none' : 'auto'),
    color: toggleColorEmphasis(theme),
    '& i': {
      color: toggleColorEmphasis(theme)
    }
  }
}))

export default styles
