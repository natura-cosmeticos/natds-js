import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IThemeWeb } from "../../../Themes";
import { ICustomIconProps } from "./CustomIcon.props";

const style = ({ sizes } : IThemeWeb) => createStyles({
  root: {
    cursor: ({ onIconPress }: ICustomIconProps) => (onIconPress ? "pointer" : "default"),
    height: sizes?.standard,
    position: "absolute",
    right: sizes?.small,
    top: sizes?.small,
    width: sizes?.standard,
    "&, & > svg": {
      fill: "inherit !important",
    },
  },
});

export const useStyles = makeStyles(style, { name: "NatDSCustomIcon" });

export default useStyles;
