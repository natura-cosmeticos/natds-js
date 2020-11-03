import { IThemeWeb } from "../../Themes";
import { createStyles } from "../../styles/createStyles";
import { makeStyles } from "../../styles/makeStyles";

const style = ({ palette, sizes }: IThemeWeb) => createStyles({
  root: {
    borderTop: `${palette?.divider} 1px solid`,
    flex: "0 0 auto",
    padding: `0 ${sizes?.tiny}px ${sizes?.small}px`,
  },
});

export const useStyles = makeStyles(style, { name: "NatDSDrawerFooter" });
export default useStyles;
