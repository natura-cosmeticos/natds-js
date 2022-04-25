import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TabItemProps } from './TabItem.props'

type TabButtonProps = Required<Pick<TabItemProps, 'isActive'>>

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    flex: 1,
    minWidth: theme.size.largeX,
    height: theme.size.medium,
    borderBottom: (props: TabButtonProps) => props.isActive && `2px solid ${theme.color.primary}`
  },
  tabButton: {
    display: 'flex',
    width: '100%',
    height: theme.size.medium,
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none'
  }
}))

export default styles
