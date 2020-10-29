import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
});

export const useStyles = makeStyles(styles, { name: "NatDSAppBarHighlight" });

export default useStyles;
