export const MuiInputBase = {
  root: {
    borderRadius: "4px",
    padding: "12px",
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
