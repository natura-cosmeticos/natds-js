import { createStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IThemeWeb } from "../../Themes";

const style = ({ sizes }: IThemeWeb) => createStyles({
  icon: {
    height: sizes?.small,
    marginRight: sizes?.micro,
    width: sizes?.small,
  },
});

export const useStyles = makeStyles(style, { name: "NatDSInputStateHelpTextProvider" });

export default useStyles;
