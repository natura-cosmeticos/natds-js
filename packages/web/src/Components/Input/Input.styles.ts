import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IInputProps } from "./Input.props";
import { IThemeWeb } from "../../Themes";

const style = createStyles(
  ({
    opacity, palette, shape, sizes, typography,
  }: IThemeWeb) => {

    const boxShadow = ({ state }: IInputProps) => {
      if (state === "error") {
        return `${palette?.error?.main} 0 0 2px`;
      }
      if (state === "success") {
        return `${palette?.success?.main} 0 0 1px`;
      }

      return `${palette?.text?.hint} 0 0 0 1px`;
    };

    return {
      disabled: {
        "& [disabled], & [disabled]:focus, & [disabled]:hover": {
          boxShadow: `${palette?.text?.hint} 0 0 0 1px`,
          color: palette?.text?.hint,
          opacity: opacity?.opaque,
          "&::placeholder": {
            color: palette?.text?.secondary,
          },
        },
      },
      focused: {
        "& input:not(:read-only)": {
          boxShadow: `${palette?.primary?.main} 0 0 0 2px`,
        },
      },
      input: {
        ...typography.body2,
        backgroundColor: "transparent",
        border: sizes?.none,
        borderRadius: shape?.borderRadius,
        boxShadow,
        boxSizing: "border-box",
        color: palette?.text?.primary,
        flex: "1 1 100%",
        lineHeight: `${sizes?.standard}px`,
        minHeight: sizes?.mediumX as number,
        outline: "none",
        padding: sizes?.small,
        paddingRight: ({ hasIcon }: IInputProps) => (hasIcon ? sizes?.large : sizes?.small),
        width: "100%",
        "&:hover:not(:read-only):not(:disabled):not(:focus)": {
          boxShadow: `${palette?.text?.secondary} 0 0 0 1px`,
        },
        "&::placeholder": {
          color: palette?.text?.secondary,
        },
        "&::-ms-clear": {
          display: "none",
          height: sizes?.none,
          width: sizes?.none,
        },
      },
      inputMultiline: {
        resize: "vertical",
      },
      inputTypeSearch: {
        "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
          display: "none",
        },
      },
      root: {
        display: "flex",
        flexFlow: "column nowrap",
        padding: sizes?.none,
        "& svg, & .natds-icons": {
          fill: palette?.text?.primary,
        },
      },
    };
  },
);

export const useStyles = makeStyles(style, { name: "NatDSInput" });
