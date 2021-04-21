import { Theme } from '@naturacosmeticos/natds-themes'
import { createUseStyles } from 'react-jss'
import { IconButtonProps } from './IconButton.props'

type IconButtonStyleProps = Required<Pick<IconButtonProps, 'backgroundStyle' | 'disabled' | 'size'>>

const getBackgroundStyles = (theme: Theme, props: IconButtonStyleProps): string => {
  const styles = {
    none: 'transparent',
    float: (props.disabled ? theme.color.lowEmphasis : theme.color.surface),
    overlay: theme.color.highlight
  }
  return styles[props.backgroundStyle]
}

const styles = createUseStyles((theme: Theme) => ({
  iconButtonContainer: {
    alignItems: 'center',
    backgroundColor: (props: IconButtonStyleProps) => getBackgroundStyles(theme, props),
    border: 'none',
    borderRadius: '50%',
    boxShadow: ({ backgroundStyle }: IconButtonStyleProps) => backgroundStyle === 'float' && theme.elevation.medium,
    cursor: 'pointer',
    display: 'inline-flex',
    height: ({ size }: IconButtonStyleProps) => theme.size[size],
    justifyContent: 'center',
    opacity: ({ backgroundStyle }: IconButtonStyleProps) => backgroundStyle === 'overlay' && theme.opacity.mediumHigh,
    outline: 'none',
    overflow: 'hidden',
    position: 'relative',
    width: ({ size }: IconButtonStyleProps) => theme.size[size],
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
      cursor: 'default'
    }
  }
}))

export default styles
