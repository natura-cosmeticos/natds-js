export const MuiInputBase = {
  root: {
    "&.MuiInput-underline:before": {
      borderBottom: "none",
    },
    "&.MuiInput-underline.Mui-disabled:before": {
      borderBottomStyle: "none",
    },
    "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "&.MuiInput-underline:after": {
      borderBottom: "none",
    },
  },
};
