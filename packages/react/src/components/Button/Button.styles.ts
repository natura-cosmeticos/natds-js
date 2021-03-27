import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ButtonProps } from './Button.props'

type ButtonStyleProps = Required<Pick<ButtonProps, 'size' | 'variant' | 'fullWidth' | 'disabled'>>

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

const styles = createUseStyles((theme: Theme) => ({
  button: {
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: (props) => (isContained(props) ? theme.color.primary : 'transparent'),
    border: (props) => (isOutlined(props) ? `1px solid ${theme.color.primary}` : 0),
    borderRadius: 4,
    cursor: 'pointer',
    height: ({ size }: ButtonStyleProps) => theme.size[size],
    outline: 0,
    padding: [theme.spacing.tiny, theme.spacing.small],
    width: (props) => (isFullWidth(props) ? '100%' : 'auto'),
    '&:disabled': {
      cursor: 'default',
      backgroundColor: (props) => (isContained(props) ? theme.color.lowEmphasis : 'transparent'),
      border: (props) => (isOutlined(props) && `1px solid ${theme.color.lowEmphasis}`)
    }
  },
  overlay: {
    position: 'absolute',
    backgroundColor: theme.color.highlight,
    height: '100%',
    visibility: 'visible',
    width: '100%',
    top: 0,
    left: 0,
    opacity: 0,
    '&:hover': {
      opacity: theme.opacity.lower
    }
  },
  label: {
    fontWeight: 500,
    letterSpacing: 1.23,
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    textTransform: 'uppercase',
    color: (props) => getLabelStyles(theme, props)
  }
}))

export default styles
