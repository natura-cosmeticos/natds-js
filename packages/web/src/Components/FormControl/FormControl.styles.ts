import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IThemeWeb } from "../../Themes";

const style = ({ typography }: IThemeWeb) => createStyles({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    fontFamily: typography.fontFamily,
  },
});

export const useStyles = makeStyles(style, { name: "NatDSFormControl" });
export default useStyles;
