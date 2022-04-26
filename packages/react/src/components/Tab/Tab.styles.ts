import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TabProps } from './Tab.props'

type TabContainerProps = Pick<TabProps, 'iconPosition' | 'itemsPosition' | 'size'>

const setItemsPosition = () => ({ itemsPosition }: TabContainerProps) => {
  if (itemsPosition === 'right') {
    return 'flex-end'
  }

  if (itemsPosition === 'center') {
    return 'center'
  }

  return 'flex-start'
}

const styles = createUseStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: (props: TabContainerProps) => (props.size === 'normal' ? theme.size.medium : theme.size.largeX),
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: setItemsPosition(),
    backgroundColor: theme.color.surface,
    boxShadow: theme.elevation.micro,
    '& button': {
      flexDirection: (props: TabContainerProps) => (props.iconPosition === 'left' ? 'row' : 'column')
    }
  }
}))

export default styles
