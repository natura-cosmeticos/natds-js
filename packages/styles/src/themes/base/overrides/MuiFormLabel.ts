import {fontSize} from "../../../tokens/fontSize";

export const MuiFormLabel = {
  formControl: {
    transform: "none",

    /**
     * @todo replace hardcoded value with a spacing/margin token
     */
    marginTop: "-4px",
  },
  root: {
    fontSize: fontSize.subtitle2.fontSize,
    "&.Mui-focused": {
      fontSize: fontSize.subtitle2.fontSize,
    },
  },
};
