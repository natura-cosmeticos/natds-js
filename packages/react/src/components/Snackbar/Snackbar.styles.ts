import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type RuleNames =
  | 'snackbarContainer'
  | 'wrapper'
  | 'wrapperRow'
  | 'wrapperColumm'
  | 'wrapperAction'
  | 'bodyText'
  | 'wrapperIcon'
  | 'show'
  | 'close'

export interface snackbarStyleProps {
    position: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    feedback: 'default' | 'success' | 'error' | 'warning' | 'info',
    actionButton?: 'none' | 'inlineButton' | 'blockButton' | 'iconButton';
    timer: number;
  }
export interface ItimeProps {
  timer: 'minimum' | 'intermediary' | 'indeterminate' | number;
}

export const timerFN = (time: ItimeProps): number | undefined => {
  if (typeof time === 'string') {
    const switchFN = (tm: string) => ({
      minimum: 5,
      intermadiary: 10,
      indeterminate: 0

    })[tm]
    return switchFN(time)
  }
  if (typeof time === 'undefined') {
    return 0
  }
  if (typeof time === 'number') {
    return time
  }
  return 0
}

const getPosition = (pos: string) => ({
  topLeft: {
    top: '8px',
    bottom: 'unset',
    left: '8px',
    right: 'unset'
  },
  topRight: {
    top: '8px',
    bottom: 'unset',
    left: 'unset',
    right: '8px '
  },
  topCenter: {
    top: '8px',
    bottom: 'unset',
    left: 'calc(50% - 164px)',
    right: '8px '
  },
  bottomLeft: {
    top: 'unset',
    bottom: '8px',
    left: '8px',
    right: 'unset'
  },
  bottomRight: {
    top: 'unset',
    bottom: '8px',
    left: 'unset',
    right: '8px'
  },
  bottomCenter: {
    top: 'unset',
    bottom: '8px',
    left: 'calc(50% - 164px)',
    right: 'unset'
  }
})[pos]
const getPositionAnimation = (posAnimation: string, time: number) => {
  // const timerN = timerFN(time)
  const animeFN = (animeP: string) => ({
    // eslint-disable-next-line quotes
    topLeft: `$openSnackL 0.6s, $closeSnackL 0.6s ${(time - 0.5)}s`,
    // eslint-disable-next-line quotes
    topCenter: `$openSnackT 0.6s, $closeSnackT 0.6s ${(time - 0.5)}s`,
    // eslint-disable-next-line quotes
    topRight: `$openSnackR 0.6s, $closeSnackR 0.6s ${(time - 0.5)}s`,
    // eslint-disable-next-line quotes
    bottomLeft: `$openSnackL 0.6s, $closeSnackL 0.6s ${(time - 0.5)}s`,
    // eslint-disable-next-line quotes
    bottomCenter: `$openSnackB 0.6s, $closeSnackB 0.6s ${(time - 0.5)}s`,
    // eslint-disable-next-line quotes
    bottomRight: `$openSnackR 0.6s, $closeSnackR 0.6s ${(time - 0.5)}s`

  })[animeP]
  if (time) {
    return animeFN(posAnimation)
  }
  return ''
}

const getColor = (theme: Theme) => (feedback: string) => ({
  default: theme.color.highlight,
  success: theme.color.success,
  error: theme.color.alert,
  warning: theme.color.warning,
  info: theme.color.link
})[feedback]

const styles = createUseStyles<RuleNames, snackbarStyleProps, Theme>((theme: Theme) => ({
  snackbarContainer: {
    fontFamily: theme.snackbar.content.fallback.fontFamily,
    fontSize: theme.snackbar.content.fontSize,
    fontWeight: theme.snackbar.content.fallback.fontWeight,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    position: 'fixed',
    width: '328px',
    minHeight: '56px',
    backgroundColor: ({ feedback }: snackbarStyleProps) => getColor(theme)(feedback),
    borderRadius: theme.textField.borderRadius,
    right: ({ position }) => getPosition(position)?.right,
    top: ({ position }) => getPosition(position)?.top,
    bottom: ({ position }) => getPosition(position)?.bottom,
    left: ({ position }) => getPosition(position)?.left,
    color: theme.color.surface,
    zIndex: 1000
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: ({ actionButton }) => `${actionButton === 'blockButton' ? 'column' : 'row'}`,
    // height: '100%',
    padding: `${theme.spacing.small}px`,
    boxSizing: 'border-box',
    // border: '1px solid red'
    overflow: 'hidden',
    gap: '16px'
  },
  wrapperRow: {
    display: 'flex',
    alignItems: 'start',
    // border: '1px solid yellow',
    width: '100%',
    gap: '8px'
  },
  wrapperColumm: {
    display: 'flex',
    flexDirection: 'column',
    // border: '1px solid green',
    flexWrap: 'wrap',
    gap: '8px'
  },
  wrapperAction: {
    display: 'flex',
    justifyContent: 'end',
    // border: '1px solid red',
    width: ({ actionButton }) => `${actionButton === 'blockButton' ? '100%' : 'auto'}`,
    gap: '8px',
    color: theme.color.surface
  },
  bodyText: {
    display: 'flex',
    whiteSpace: 'normal',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
    wordBreak: 'break-all'
  },
  wrapperIcon: {
    display: 'flex',
    boxSizing: 'border-box'
  },
  show: {
    animation: ({ position, timer }) => getPositionAnimation(position, timer),
    animationFillMode: 'forwards',
    visibility: 'visible'
  },
  close: {
    animationFillMode: 'forwards',
    visibility: 'hidden'
  },
  '@keyframes openSnackR': {
    from: {
      right: '-328px'
    },
    to: {
      right: '8px'
    }
  },
  '@keyframes openSnackL': {
    from: {
      left: '-328px'
    },
    to: {
      left: '8px'
    }
  },
  '@keyframes openSnackB': {
    from: {
      bottom: '-56px'
    },
    to: {
      bottom: '8px'
    }
  },
  '@keyframes openSnackT': {
    from: {
      top: '-56px'
    },
    to: {
      top: '8px'
    }
  },
  '@keyframes closeSnackR': {
    from: {
      right: '8px'
    },
    to: {
      right: '-328px'
    }
  },
  '@keyframes closeSnackL': {
    from: {
      left: '8px'
    },
    to: {
      left: '-328px'
    }
  },
  '@keyframes closeSnackB': {
    from: {
      bottom: '0px'
    },
    to: {
      bottom: '-56px'
    }
  },
  '@keyframes closeSnackT': {
    from: {
      top: '0px'
    },
    to: {
      top: '-56px'
    }
  }
}))

export default styles
