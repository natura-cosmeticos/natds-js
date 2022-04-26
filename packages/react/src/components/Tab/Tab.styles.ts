import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TabProps } from './Tab.props'

type TabButtonIconPosition = Pick<TabProps, 'iconPosition' | 'itemsPosition'>

const setItemsPosition = () => ({ itemsPosition }: TabButtonIconPosition) => {
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
    height: theme.size.medium,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: setItemsPosition(),
    backgroundColor: theme.color.surface,
    boxShadow: theme.elevation.micro,
    '& button': {
      flexDirection: (props: TabButtonIconPosition) => (props.iconPosition === 'left' ? 'row' : 'column')
    }
  }
}))

export default styles
