import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IThemeWeb } from "../../Themes";
import { IInputLabelProps } from "./InputLabel.props";

const style = ({ palette, sizes, typography } : IThemeWeb) => createStyles({
  root: {
    ...typography.subtitle2,
    color: ({ state }: IInputLabelProps) => {
      if (state === "error") {
        return palette?.error?.main;
      }
      if (state === "success") {
        return palette?.success?.main;
      }

      return palette?.text?.secondary;
    },
    lineHeight: "1.2em",
    padding: `${sizes?.none} ${sizes?.none} ${sizes?.micro}px`,
  },
});

const useStyles = makeStyles(style, { name: "NatDSInputLabel" });

export default useStyles;
