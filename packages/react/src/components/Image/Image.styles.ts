import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type StyleProps = {
  highlight: boolean,
  fade: 'top' | 'bottom' | 'right' | 'left' | undefined
}

const setBackground = () => ({ highlight, fade }: StyleProps) => {
  if (highlight && !fade) {
    return 'rgba(0, 0, 0, 0.48)'
  }

  if (highlight && fade) {
    return `linear-gradient(to ${fade}, #000, transparent)`
  }

  return 'transparent'
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    position: 'relative',
    '& > img': {
      width: '100%',
      height: '100%'
    }
  },
  overlay: {
    padding: theme.spacing.micro,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: setBackground()
  }
}))

export default styles
