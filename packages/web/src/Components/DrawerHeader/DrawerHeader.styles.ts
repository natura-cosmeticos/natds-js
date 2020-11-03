import { IThemeWeb } from "../../Themes";
import { createStyles } from "../../styles/createStyles";
import { makeStyles } from "../../styles/makeStyles";

const style = ({ palette, sizes }: IThemeWeb) => createStyles({
  root: {
    borderBottom: `${palette?.divider} 1px solid`,
    flex: "0 0 auto",
    padding: `${sizes?.semi}px ${sizes?.small}px ${sizes?.small}px`,
  },
  avatar: {
    marginBottom: sizes?.small,
  },
});

export const useStyles = makeStyles(style, { name: "NatDSDrawerHeader" });
export default useStyles;
