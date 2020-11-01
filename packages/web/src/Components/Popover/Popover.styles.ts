import { createStyles } from "../../styles/createStyles";
import { makeStyles } from "../../styles/makeStyles";
import { IThemeWeb } from "../../Themes";
import { IPopoverProps } from "./Popover.props";

const arrowBeforeSelector = "&::before";

const style = ({ palette, sizes }: IThemeWeb) => createStyles({
  arrow: {
    fontSize: sizes?.tiny,
    height: "3em",
    position: "absolute",
    width: "3em",
    [arrowBeforeSelector]: {
      borderStyle: "solid",

      /**
       * @see https://stackoverflow.com/questions/53768260/css-pseudo-selectors-with-material-ui
       */
      content: "\"\"",
      display: "block",
      height: 0,
      margin: "auto",
      width: 0,
    },
    "[x-placement*='bottom'] &": {
      height: "1em",
      marginTop: "-0.9em",
      width: "3em",
      [arrowBeforeSelector]: {
        borderColor: `transparent transparent ${palette?.background?.paper} transparent`,
        borderWidth: "0 1em 1em 1em",
        marginLeft: sizes?.micro,
      },
    },
    "[x-placement*='top'] &": {
      bottom: 0,
      height: "1em",
      marginBottom: "-0.9em",
      width: "3em",
      [arrowBeforeSelector]: {
        borderColor: `${palette?.background?.paper} transparent transparent transparent`,
        borderWidth: "1em 1em 0 1em",
        marginLeft: sizes?.micro,
      },
    },
    "[x-placement*='right'] &": {
      height: "3em",
      left: 0,
      marginLeft: "-0.93em",
      width: "1em",
      [arrowBeforeSelector]: {
        borderColor: `transparent ${palette?.background?.paper} transparent transparent`,
        borderWidth: "1em 1em 1em 0",
        marginTop: sizes?.micro,
      },
    },
    "[x-placement*='left'] &": {
      height: "3em",
      marginRight: "-0.9em",
      right: 0,
      width: "1em",
      [arrowBeforeSelector]: {
        borderColor: `transparent transparent transparent ${palette?.background?.paper}`,
        borderWidth: "1em 0 1em 1em",
        marginTop: sizes?.micro,
      },
    },
  },
  actionLinkContainer: {
    display: "inline-block",
    paddingTop: sizes?.tiny,
  },
  container: {
    maxWidth: ({ maxWidth }: IPopoverProps) => maxWidth || sizes?.veryHuge,
    padding: sizes?.small,
  },
  root: {
    zIndex: 1,
    "&[x-placement*='bottom']": {
      marginTop: sizes?.tiny,
    },
    "&[x-placement*='top']": {
      marginBottom: sizes?.tiny,
    },
    "&[x-placement*='right']": {
      marginLeft: sizes?.tiny,
    },
    "&[x-placement*='left']": {
      marginRight: sizes?.tiny,
    },
  },
});

export const useStyles = makeStyles(style, { name: "NatDSPopover" });

export default makeStyles;
