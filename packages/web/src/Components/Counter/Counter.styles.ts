import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { tokens } from "@naturacosmeticos/natds-styles";
import { ICounterProps } from "./Counter";
import { IThemeWeb } from "../../Themes";
import { INPUT_DIFFERENCE } from "./constants";

const { sizes } = tokens;

export const getButtonheight = ({ size }: ICounterProps): number => (size === "small" ? sizes?.semiX : sizes?.medium);
export const getInputHeight = (props: ICounterProps) : number => getButtonheight(props) - INPUT_DIFFERENCE;

const style = (theme: IThemeWeb) => createStyles({
  button: {
    minHeight: getButtonheight,
    "&:last-child": {
      borderLeft: 0,
    },
  },
  input: {
    textAlign: "center",
    width: `${sizes.semiX}px`,
    "& .MuiInput-input": {
      padding: 0,
      borderRadius: 0,
      margin: 1,
      minHeight: getInputHeight,
      fontSize: theme.typography.body1?.fontSize,
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
      },
    },
  },
});

export const useStyles = makeStyles(style, { name: "NatDSCounter" });

export default useStyles;
