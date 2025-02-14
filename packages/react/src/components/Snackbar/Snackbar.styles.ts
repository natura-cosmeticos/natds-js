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
    directionButton?: 'none' | 'inlineButton' | 'blockButton';
    timer: number;
    animation?: boolean
  }
export interface ItimeProps {
  timer: 'minimum' | 'intermediary' | 'indeterminate' | number;
}

interface IgetPositionReturn {
    top: string;
    bottom: string;
    left: string;
    right: string;
}
export const getPosition = (pos: string): IgetPositionReturn | undefined => ({
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
export const getPositionAnimation = (
  posAnimation: string, time: number, animation: boolean | undefined
): string | undefined => {
  const animeFN = (animeP: string): string | undefined => ({
    topLeft: `$openSnackL 0.6s, $closeSnackL 0.6s ${(time - 0.5)}s`,
    topCenter: `$openSnackT 0.6s, $closeSnackT 0.6s ${(time - 0.5)}s`,
    topRight: `$openSnackR 0.6s, $closeSnackR 0.6s ${(time - 0.5)}s`,
    bottomLeft: `$openSnackL 0.6s, $closeSnackL 0.6s ${(time - 0.5)}s`,
    bottomCenter: `$openSnackB 0.6s, $closeSnackB 0.6s ${(time - 0.5)}s`,
    bottomRight: `$openSnackR 0.6s, $closeSnackR 0.6s ${(time - 0.5)}s`

  })[animeP]
  if (animation) {
    return animeFN(posAnimation)
  }
  return ''
}

export const getColor = (theme: Theme) => (feedback: string): string | undefined => ({
  default: theme.color.highEmphasis,
  success: theme.color.success,
  error: theme.color.alert,
  warning: theme.color.warning,
  info: theme.color.link
})[feedback]

const styles = createUseStyles<RuleNames, snackbarStyleProps, Theme>((theme: Theme) => ({
  snackbarContainer: {
    fontFamily: [
      theme.snackbar.content.primary.fontFamily,
      theme.snackbar.content.fallback.fontFamily],
    fontSize: theme.snackbar.content.fontSize,
    fontWeight: theme.snackbar.content.primary.fontWeight,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    position: 'fixed',
    width: '328px',
    minHeight: '56px',
    backgroundColor: ({ feedback }: snackbarStyleProps) => getColor(theme)(feedback),
    borderRadius: theme.snackbar.borderRadius,
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
    flexDirection: ({ directionButton }) => `${directionButton === 'blockButton' ? 'column' : 'row'}`,
    padding: `${theme.spacing.small}px`,
    boxSizing: 'border-box',
    overflow: 'hidden',
    gap: '16px'
  },
  wrapperRow: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '8px'
  },
  wrapperColumm: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: '8px'
  },
  wrapperAction: {
    display: 'flex',
    justifyContent: 'end',
    width: ({ directionButton }) => `${directionButton === 'blockButton' ? '100%' : 'auto'}`,
    gap: '8px',
    color: theme.color.surface
  },
  bodyText: {
    display: 'flex',
    whiteSpace: 'normal',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
    wordBreak: 'break-all',
    // color: ({ feedback }: snackbarStyleProps) => getColorText(theme)(feedback)
    color: ({ feedback }: snackbarStyleProps) => (
      feedback === 'warning' ? theme.color.highEmphasis : theme.color.surface)
  },
  wrapperIcon: {
    display: 'flex',
    boxSizing: 'border-box'
  },
  show: {
    animation: ({ position, timer, animation }) => getPositionAnimation(position, timer, animation),
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
      bottom: '8px'
    },
    to: {
      bottom: '-224px'
    }
  },
  '@keyframes closeSnackT': {
    from: {
      top: '8px'
    },
    to: {
      top: '-224px'
    }
  }
}))

export default styles
