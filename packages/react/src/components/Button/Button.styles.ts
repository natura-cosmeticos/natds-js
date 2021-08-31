/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ButtonProps } from './Button.props'

const isContained = ({ variant }: ButtonProps) => variant === 'contained'
const isOutlined = ({ variant }: ButtonProps) => variant === 'outlined'

const getLabelStyles = (theme: Theme, props: ButtonProps) => {
  const color = {
    active: (isContained(props) ? theme.color.onPrimary : theme.color.highEmphasis),
    disabled: ((isContained(props) && props.disabled) ? theme.color.highEmphasis : theme.color.mediumEmphasis)
  }

  return props.disabled ? color.disabled : color.active
}

const getPaddingStyles = (theme: Theme, { size }: ButtonProps) => {
  switch (size) {
    case 'semi':
      return theme.spacing.micro
    case 'medium':
      return theme.spacing.small
    case 'semiX':
      return theme.spacing.tiny
    default:
      return theme.spacing.small
  }
}

const getLabelMargin = (theme: Theme, side: string) => (props: ButtonProps) => props.showIcon && props.iconPosition === side && theme.size.tiny
const getIconPosition = (props: ButtonProps) => (props.showIcon && props.iconPosition === 'right' ? 'row' : 'row-reverse')

const styles = createUseStyles((theme: Theme) => ({
  button: {
    backgroundColor: (props) => (isContained(props) ? theme.color.primary : 'transparent'),
    border: (props) => (isOutlined(props) ? `1px solid ${theme.color.primary}` : 0),
    boxShadow: (props) => (isContained(props) ? theme.elevation.tiny : 'none'),
    borderRadius: theme.borderRadius.medium,
    cursor: 'pointer',
    height: ({ size }: ButtonProps) => size && theme.size[size],
    outline: 0,
    overflow: 'hidden',
    paddingLeft: (props) => getPaddingStyles(theme, props),
    paddingRight: (props) => getPaddingStyles(theme, props),
    position: 'relative',
    width: ({ fullWidth }: ButtonProps) => (fullWidth ? '100%' : 'auto'),
    '&:after': {
      backgroundColor: theme.color.highlight,
      content: '" "',
      height: '100%',
      left: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    '&:hover:not([disabled]):after': {
      opacity: theme.opacity.lower
    },
    '&:focus:not([disabled]):after': {
      opacity: theme.opacity.low
    },
    '&:disabled': {
      backgroundColor: (props) => (isContained(props) ? theme.color.lowEmphasis : 'transparent'),
      border: (props) => (isOutlined(props) && `1px solid ${theme.color.lowEmphasis}`),
      boxShadow: theme.elevation.none,
      cursor: 'default'
    }
  },
  labelContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: (props) => getIconPosition(props),
    justifyContent: 'center'
  },
  label: {
    color: (props: ButtonProps) => getLabelStyles(theme, props),
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 1.23,
    marginLeft: getLabelMargin(theme, 'left'),
    marginRight: getLabelMargin(theme, 'right'),
    overflow: 'hidden',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
    userSelect: 'none',
    whiteSpace: 'nowrap'
  }
}))

export default styles
