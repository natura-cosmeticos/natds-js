import createStyles from "../../styles/createStyles";
import { makeStyles } from "../../styles/makeStyles";
import { IThemeWeb } from "../../Themes";

type UseStylesArgs = {
  scrolled: boolean
}

export const boxShadow = ({ scrolled }: UseStylesArgs) => {
  if (scrolled) {
    return "rgba(0, 0, 0, .14) inset 0 9px 5px -5px";
  }

  return "none";
};

const style = ({ sizes }: IThemeWeb) => createStyles({
  root: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    position: "relative",
    "&::before": {
      boxShadow,
      content: "\"\"",
      height: sizes?.small,
      left: 0,
      pointerEvents: "none",
      position: "absolute",
      right: 0,
      top: 0,

      /**
       * @todo replace hardcoded duration by time token
       */
      transition: "box-shadow ease-in-out .1s",
      zIndex: 2,
    },
  },
  scroll: {
    flex: "1 1 auto",
    overflowY: "auto",
    padding: `${sizes?.none} ${sizes?.tiny}px`,
    position: "relative",
  },
});

export const useStyles = makeStyles(style, { name: "NatDSDrawerBody" });

export default useStyles;
