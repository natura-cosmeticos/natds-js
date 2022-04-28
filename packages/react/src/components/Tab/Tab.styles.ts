import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TabProps } from './Tab.props'

type TabContainerProps = Pick<TabProps, 'iconPosition' | 'itemsPosition' | 'size' | 'position' | 'elevation'>

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
  wrapper: {
    position: 'relative'
  },
  container: {
    width: '100%',
    height: (props: TabContainerProps) => (props.size === 'normal' ? theme.size.medium : theme.size.largeX),
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: setItemsPosition(),
    backgroundColor: theme.color.surface,
    boxShadow:
      (props: TabContainerProps) => (
        props.elevation ? theme.elevation.micro : theme.elevation.none
      ),
    overflow: 'hidden',
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
    '& button': {
      flexDirection: (props: TabContainerProps) => (props.iconPosition === 'left' ? 'row' : 'column')
    }
  },
  navigation: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 1,
    border: 0,
    cursor: 'pointer',
    '& > i': {
      color: theme.color.mediumEmphasis
    }
  },
  navigationPrev: {
    left: 0,
    background: `linear-gradient(to right, ${theme.color.surface}, transparent)`
  },
  navigationNext: {
    right: 0,
    background: `linear-gradient(to left, ${theme.color.surface}, transparent)`
  }
}))

export default styles
