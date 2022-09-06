import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type StyleProps = {
  highlight: boolean,
  fade: 'top' | 'bottom' | 'right' | 'left' | undefined,
  border: 'medium' | 'circle' | undefined
}

const setBackground = () => ({ highlight, fade }: StyleProps) => {
  if (highlight && !fade) {
    return 'rgba(0, 0, 0, 0.48)'
  }

  if (highlight && fade) {
    return `linear-gradient(to ${fade}, transparent, #000)`
  }

  return 'transparent'
}

const setBorderRadius = (theme: Theme) => ({ border }: StyleProps) => {
  if (!border) {
    return 'none'
  }

  return border === 'medium' ? theme.borderRadius.medium : '50%'
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    position: 'relative',
    borderRadius: setBorderRadius(theme),
    overflow: 'hidden',
    '& > img': {
      width: '100%',
      height: '100%'
    }
  },
  overlay: {
    padding: theme.spacing.small,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: setBackground()
  }
}))

export default styles
