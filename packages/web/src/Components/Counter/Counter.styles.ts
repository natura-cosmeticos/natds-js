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
    "& .MuiInput-root": {
      borderRadius: 0,
      marginTop: 1,
      padding: 0,
    },
    "& .MuiInput-input": {
      minHeight: getInputHeight,
      padding: 0,
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
      },
    },
  },
});

export const useStyles = makeStyles(style, { name: 'NatDSCounter' });

export default useStyles;
