import {buttonSizes} from "../../tokens/buttonSizes";
import {fontSize} from "../../tokens/fontSize";
import {spacing} from "../../tokens/spacing";
import {sizes} from "../../tokens/sizes";

export const overrides = {
  MuiAlert: {
    root: {
      /**
       * @todo replace hardcoded value with a size/width token
       */
      width: 278,
      padding: spacing.spacingSmall,
      ...fontSize.body1,
    },
    icon: {
      marginRight: spacing.spacingTiny,
    },
    message: {
      padding: "5px 0",
    },
  },
  MuiAlertTitle: {
    root: {
      ...fontSize.h6,
    },
  },
  MuiBadge: {
    badge: {
      /**
       * @todo replace hardcoded value with a spacing/padding token
       */
      padding: "0 4px",
    },
  },
  MuiButton: {
    outlined: {
      padding: null,
    },
    root: {
      ...buttonSizes.medium,
      ...fontSize.subtitle2,
    },
    sizeLarge: {
      ...buttonSizes.large,
      ...fontSize.subtitle2,
    },
    sizeSmall: {
      ...buttonSizes.small,
      ...fontSize.subtitle2,
    },
    text: {
      padding: null,
    }
  },
  MuiChip: {
    deleteIcon: {
      fontSize: `${sizes.standard}px`,
      height: `${sizes.standard}px`,
      width: `${sizes.standard}px`,
    },
    deleteIconSmall: {
      fontSize: `${sizes.small}px`,
      height: `${sizes.small}px`,
      width: `${sizes.small}px`,
    },
    icon: {
      fontSize: `${sizes.standard}px`,
    },
    iconSmall: {
      fontSize: `${sizes.small}px`,
      height: `${sizes.small}px`,
      /**
       * @todo replace hardcoded value with a spacing/margin token
       */
      marginTop: "1px",
      width: `${sizes.small}px`,
    },
  },
  MuiExpansionPanel: {
    root: {
      /**
       * @todo replace border width value with a size/borderWidth token
       */
      border: "transparent 1px solid",
    }
  },
  MuiExpansionPanelSummary: {
    root: {
      alignItems: "flex-start",
      /**
       * @todo replace hardcoded value with a spacing/margin token
       */
      marginTop: "8px",
      "&$disabled": {
        /**
         * @todo replace hardcoded value with a opacity token
         */
        opacity: 1,
      },
    },
  },
  MuiFormLabel: {
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
  },
  MuiListItem: {
    root: {
      cursor: "pointer",
      "&$selected": {
        "&:focus": {
          outline: "none",
        },
      },
      gutters: {
        "&:focus": {
          outline: "none",
        },
      },
    }
  },
  MuiIconButton: {
    root: {
      /**
       * @todo replace hardcoded value with a spacing/padding token
       */
      padding: "8px"
    },
    sizeSmall: {
      /**
       * @todo replace hardcoded value with a spacing/padding token
       */
      padding: "4px",
    },
  },
  MuiInputAdornment: {
    root: {
      position: "absolute",
      right: "0",
    },
    positionEnd: {
      marginRight: spacing.spacingTiny,
    },
  },
  MuiInputBase: {
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
  },
  MuiInputLabel: {
    formControl: {
      transform: "none",
      /**
       * @todo replace hardcoded value with a spacing/margin token
       */
      marginTop: "-4px",
    },
    shrink: {
      transform: "none",
      /**
       * @todo replace hardcoded value with a spacing/margin token
       */
      marginTop: "-4px",
    },
  },
  MuiSelect: {
    select: {
      "&:focus": {
        backgroundColor: "transparent",
      },
    },
  },
  MuiTab: {
    wrapper: {
      "& > *:first-child": {
        /**
         * @todo replace hardcoded value with a spacing/margin token
         */
        marginBottom: "2px !important",
      },
    },
  },
  MuiTextField: {
    "& .MuiInputLabel": {
      /**
       * @todo replace hardcoded value with a spacing/margin token
       */
      marginTop: "20px",
    },
  },
  MuiToolbar: {
    root: {
      /**
       * @todo replace hardcoded value with a spacing/padding token
       */
      padding: "0 16px",
      /**
       * @todo replace hardcoded value with a breakpoint token
       */
      "@media (min-width: 600px)": {
        /**
         * @todo replace hardcoded value with a padding token
         */
        padding: "0 16px",
      },
    },
    gutters: {
      /**
       * @todo replace hardcoded value with a spacing/padding token
       */
      padding: "0 16px",
      /**
       * @todo replace hardcoded value with a breakpoint token
       */
      "@media (min-width: 600px)": {
        /**
         * @todo replace hardcoded value with a spacing/padding token
         */
        padding: "0 16px",
      },
    },
    regular: {
      /**
       * @todo replace hardcoded value with a size/height token
       */
      minHeight: "56px",
      /**
       * @todo replace hardcoded value with a breakpoint token
       */
      "@media (min-width: 600px)": {
        /**
         * @todo replace hardcoded value with a size/height token
         */
        minHeight: "56px",
      },
    },
    dense: {
      /**
       * @todo replace hardcoded value with a size/height token
       */
      minHeight: "56px",
      /**
       * @todo replace hardcoded value with a breakpoint token
       */
      "@media (min-width: 600px)": {
        /**
         * @todo replace hardcoded value with a size/height token
         */
        minHeight: "56px",
      },
    },
  },
}
