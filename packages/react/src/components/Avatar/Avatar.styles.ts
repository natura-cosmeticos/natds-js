import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { AvatarProps } from './Avatar.props'
import { buildTheme } from '../../ThemeProvider'

type AvatarStyleProps = Pick<AvatarProps, 'size' | 'brand'>

const getColorTheme = (theme: Theme) => ({ brand }: AvatarStyleProps) => {
  const themeSelectAvatar = buildTheme(brand, 'light')
  if (brand) {
    return {
      primary: themeSelectAvatar.color.primary,
      onPrimary: themeSelectAvatar.color.onPrimary
    }
  }
  return {
    primary: theme.color.primary,
    onPrimary: theme.color.onPrimary
  }
}

const styles = createUseStyles((theme: Theme) => ({
  surface: {
    display: 'flex',
    width: ({ size }: AvatarStyleProps) => (size && theme.size[size]),
    height: ({ size }: AvatarStyleProps) => (size && theme.size[size]),
    borderRadius: ({ size }: AvatarStyleProps) => (size && theme.avatar[size].borderRadius),
    backgroundColor: ({ brand }: AvatarStyleProps) => getColorTheme(theme)({ brand }).primary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  image: {
    objectFit: 'cover',
    height: '100%'
  },
  label: {
    color: ({ brand }: AvatarStyleProps) => getColorTheme(theme)({ brand }).onPrimary,
    fontFamily: [theme.avatar.primary.fontFamily, theme.avatar.fallback.fontFamily],
    fontSize: ({ size }: AvatarStyleProps) => (size && theme.avatar[size].fontSize),
    fontWeight: [theme.avatar.primary.fontWeight, theme.avatar.fallback.fontWeight],
    letterSpacing: ({ size }: AvatarStyleProps) => (size && theme.avatar[size].letterSpacing),
    lineHeight: ({ size }: AvatarStyleProps) => (size && theme.avatar[size].lineHeight),
    padding: theme.spacing.micro,
    textTransform: 'uppercase'
  },
  icon: {
    padding: theme.spacing.micro
  }
}))

export default styles
