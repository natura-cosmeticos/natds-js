import { IThemeWeb } from "../../../Themes";
import { createStyles } from "../../../styles/createStyles";
import { makeStyles } from "../../../styles/makeStyles";

const style = ({ sizes }: IThemeWeb) => createStyles({
  badgeComponent: {
    marginLeft: sizes?.micro,
  },
});

export const useStyles = makeStyles(style, { name: "NatDSMenuItemText" });

export default useStyles;
