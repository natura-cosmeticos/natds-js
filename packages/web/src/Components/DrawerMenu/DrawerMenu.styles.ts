import { createStyles } from "../../styles/createStyles";
import { makeStyles } from "../../styles/makeStyles";
import { IThemeWeb } from "../../Themes";

const style = ({ sizes }: IThemeWeb) => createStyles({
  root: {
    flex: "1 1 auto",
  },
  listPadding: {
    marginBottom: sizes?.tiny,
    marginTop: sizes?.tiny,
    paddingBottom: sizes?.none,
    paddingTop: sizes?.none,
  },
});

export const useStyles = makeStyles(style, { name: "NatDSDrawerMenu" });
export default useStyles;
