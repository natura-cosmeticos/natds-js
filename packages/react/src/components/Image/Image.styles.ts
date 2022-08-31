import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type StyleProps = {
  highlight: boolean
}

const setBackground = () => ({ highlight }: StyleProps) => {
  if (highlight) {
    return 'rgba(0, 0, 0, 0.48)'
  }

  return 'transparent'
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: setBackground()
  }
}))

export default styles
