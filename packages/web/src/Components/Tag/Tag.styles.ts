import { createStyles } from "../../styles/createStyles";
import { IThemeWeb } from "../../Themes";
import { makeStyles } from "../../styles/makeStyles";

const style = ({
  palette, shape, sizes, typography,
}: IThemeWeb) => createStyles({
  root: {
    ...typography.caption,
    lineHeight: `${sizes?.small}px`,
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
  default: {
    borderRadius: shape?.badgeBorderRadius,
  },
  left: {
    borderTopRightRadius: shape?.badgeBorderRadius,
    borderBottomRightRadius: shape?.badgeBorderRadius,
  },
  small: {
    padding: `${sizes?.none}px  ${sizes?.tiny}px`,
  },
  standard: {
    padding: `${sizes?.micro}px ${sizes?.tiny}px`,
  },
});

const useStyles = makeStyles(style, { name: "NatDSTag" });

export default useStyles;
