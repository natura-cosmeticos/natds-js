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
    flex: 1,
    minWidth: theme.size.largeX,
    height: theme.size.medium,
    borderBottom: (props: TabButtonProps) => props.isActive && `2px solid ${theme.color.primary}`,
    pointerEvents: (props: TabButtonProps) => (props.isDisabled ? 'none' : 'auto'),
    '&:hover[not:disabled]': {
      background: `${theme.color.highlight}29`
    }
  },
  tabButton: {
    display: 'flex',
    gap: theme.spacing.tiny,
    width: '100%',
    height: theme.size.medium,
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    textTransform: 'uppercase',
    color: toggleColorEmphasis(theme),
    '& i': {
      color: toggleColorEmphasis(theme)
    }
  }
}))

export default styles
