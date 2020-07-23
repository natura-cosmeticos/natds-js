export const MuiListItem = {

  /**
   * Styles applied to the (normally root) component element. May be wrapped by a container.
   */
  root: {
    cursor: "pointer",
    "&$selected": {
      "&:focus": {
        outline: "none",
      },
    },
  },

  /**
   * Styles applied to the inner component element if `disableGutters={false}`.
   */
  gutters: {
    "&:focus": {
      outline: "none",
    },
  },
};
