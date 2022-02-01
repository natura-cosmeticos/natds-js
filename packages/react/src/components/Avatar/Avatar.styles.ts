import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { AvatarProps } from './Avatar.props'

type AvatarStyleProps = Required<Pick<AvatarProps, 'size'>>

const styles = createUseStyles((theme: Theme) => ({
  surface: {
    display: 'flex',
    width: ({ size }: AvatarStyleProps) => (size && theme.size[size]),
    height: ({ size }: AvatarStyleProps) => (size && theme.size[size]),
    borderRadius: ({ size }: AvatarStyleProps) => (size && theme.avatar[size].borderRadius),
    backgroundColor: theme.color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  image: {
    objectFit: 'cover',
    height: '100%'
  },
  label: {
    color: theme.color.onPrimary,
    fontFamily: [theme.avatar.primary.fontFamily, theme.avatar.fallback.fontFamily],
    fontSize: ({ size }: AvatarStyleProps) => (size && theme.avatar[size].fontSize),
    fontWeight: [theme.avatar.primary.fontWeight, theme.avatar.fallback.fontWeight],
    letterSpacing: ({ size }: AvatarStyleProps) => (size && theme.avatar[size].letterSpacing),
    lineHeight: ({ size }: AvatarStyleProps) => (size && theme.avatar[size].lineHeight),
    padding: theme.spacing.micro
  },
  icon: {
    color: theme.color.onPrimary,
    padding: theme.spacing.micro
  }
}))

export default styles
