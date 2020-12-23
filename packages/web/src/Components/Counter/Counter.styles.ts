import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { tokens } from "@naturacosmeticos/natds-styles";
import { ICounterProps } from "./Counter";
import { IThemeWeb } from "../../Themes";
import { INPUT_DIFFERENCE } from "./constants";

const { sizes } = tokens;

const style = (theme: IThemeWeb) => createStyles({
  button: {
    fontSize: 14,
    minHeight: ({ size }: ICounterProps) => `${size === "small" ? theme.sizes?.semiX : theme.sizes?.medium}px`,
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
      minHeight: ({ size }: ICounterProps) => `${(size === "small" ? sizes?.semiX : sizes?.medium) - INPUT_DIFFERENCE}px`,
      fontSize: theme.typography.body1?.fontSize,
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
      },
    },
  },
});

export const useStyles = makeStyles(style, { name: "NatDSCounter" });

export default useStyles;
