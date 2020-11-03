import { createStyles } from "../../styles/createStyles";
import { IThemeWeb } from "../../Themes";
import { makeStyles } from "../../styles/makeStyles";

const style = ({
  palette, shape, sizes, typography,
}: IThemeWeb) => createStyles({
  root: {
    ...typography.caption,
    borderRadius: shape?.badgeBorderRadius,
    lineHeight: `${sizes?.small}px`,
    padding: `1px ${sizes?.tiny}px`,
  },
  dark: {
    backgroundColor: palette?.text?.disabled,
    color: palette?.background?.defaultContrastText,
  },
  error: {
    backgroundColor: palette?.error?.main,
    color: palette?.error?.contrastText,
  },
  info: {
    backgroundColor: palette?.complementary?.link,
    color: palette?.complementary?.linkContrastText,
  },
  light: {
    backgroundColor: palette?.background?.paper,
    color: palette?.background?.paperContrastText,
  },
  primary: {
    backgroundColor: palette?.primary?.main,
    color: palette?.primary?.contrastText,
  },
  secondary: {
    backgroundColor: palette?.secondary?.main,
    color: palette?.secondary?.contrastText,
  },
  success: {
    backgroundColor: palette?.success?.main,
    color: palette?.success?.contrastText,
  },
  warning: {
    backgroundColor: palette?.complementary?.warning,
    color: palette?.complementary?.warningContrastText,
  },
});

const useStyles = makeStyles(style, { name: "NatDSContextualBadge" });

export default useStyles;
