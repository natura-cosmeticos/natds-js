import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IThemeWeb } from "../../Themes";

const style = ({ palette, typography: { caption } }: IThemeWeb) => createStyles({
  label: {
    "&$selected": {
      fontSize: caption?.fontSize,
    },
  },
  selected: {
    color: palette?.text?.primary,
  },
});

export const useStyles = makeStyles(style, { name: "NatDSBottomNavigationAction" });

export default useStyles;
