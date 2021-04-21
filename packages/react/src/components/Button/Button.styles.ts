/* eslint-disable max-lines-per-function */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ButtonProps } from './Button.props'

type ButtonStyleProps = Required<Pick<ButtonProps,
  'disabled' |
  'fullWidth' |
  'iconPosition' |
  'showIcon' |
  'size' |
  'variant'
>>

const isContained = ({ variant }: ButtonStyleProps) => variant === 'contained'
const isOutlined = ({ variant }: ButtonStyleProps) => variant === 'outlined'
const isFullWidth = ({ fullWidth }: ButtonStyleProps) => fullWidth
const isDisabled = ({ disabled }: ButtonStyleProps) => disabled

const getLabelStyles = (theme: Theme, props: ButtonStyleProps) => {
  const color = {
    active: (isContained(props) ? theme.color.onPrimary : theme.color.highEmphasis),
    disabled: ((isContained(props) && isDisabled(props))
      ? theme.color.highEmphasis : theme.color.mediumEmphasis
    )
  }
  return isDisabled(props) ? color.disabled : color.active
}

const getPaddingStyles = (theme: Theme, props: ButtonStyleProps) => {
  switch (props.size) {
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

// eslint-disable-next-line max-len
const getLabelMargin = (theme: Theme, side: string) => ({ showIcon, iconPosition }: ButtonStyleProps) => showIcon && iconPosition === side && theme.size.tiny

const styles = createUseStyles((theme: Theme) => ({
  button: {
    backgroundColor: (props) => (isContained(props) ? theme.color.primary : 'transparent'),
    border: (props) => (isOutlined(props) ? `1px solid ${theme.color.primary}` : 0),
    boxShadow: (props) => (isContained(props) ? theme.elevation.tiny : 'none'),
    borderRadius: theme.borderRadius.medium,
    cursor: 'pointer',
    height: ({ size }: ButtonStyleProps) => theme.size[size],
    outline: 0,
    overflow: 'hidden',
    paddingLeft: (props) => getPaddingStyles(theme, props),
    paddingRight: (props) => getPaddingStyles(theme, props),
    position: 'relative',
    width: (props) => (isFullWidth(props) ? '100%' : 'auto'),
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
    flexDirection: ({ iconPosition }: ButtonStyleProps) => (iconPosition === 'right' ? 'row' : 'row-reverse'),
    justifyContent: 'center'
  },
  label: {
    color: (props: ButtonStyleProps) => getLabelStyles(theme, props),
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
