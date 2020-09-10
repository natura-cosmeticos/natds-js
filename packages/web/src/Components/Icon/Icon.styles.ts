import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles } from "@material-ui/core";
import { getFontSize } from "./getFontSize";
import { IThemeWeb } from "../../Themes";

// @todo adopt with base in prop: https://material-ui.com/pt/styles/basics/#adapting-based-on-props
const styles = (theme: IThemeWeb) => createStyles({
  microFontSize: {
    fontSize: getFontSize({ size: "micro", theme }),
  },
  tinyFontSize: {
    fontSize: getFontSize({ size: "tiny", theme }),
  },
  smallFontSize: {
    fontSize: getFontSize({ size: "small", theme }),
  },
  standardFontSize: {
    fontSize: getFontSize({ size: "standard", theme }),
  },
  mediumFontSize: {
    fontSize: getFontSize({ size: "medium", theme }),
  },
  largeFontSize: {
    fontSize: getFontSize({ size: "large", theme }),
  },

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   */
  largexFontSize: {
    fontSize: getFontSize({ size: "largeX", theme }),
  },
  largeXFontSize: {
    fontSize: getFontSize({ size: "largeX", theme }),
  },

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   */
  largexxFontSize: {
    fontSize: getFontSize({ size: "largeXX", theme }),
  },
  largeXXFontSize: {
    fontSize: getFontSize({ size: "largeXX", theme }),
  },
  hugeFontSize: {
    fontSize: getFontSize({ size: "huge", theme }),
  },

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   */
  hugexFontSize: {
    fontSize: getFontSize({ size: "hugeX", theme }),
  },
  hugeXFontSize: {
    fontSize: getFontSize({ size: "hugeX", theme }),
  },

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   */
  hugexxFontSize: {
    fontSize: getFontSize({ size: "hugeXX", theme }),
  },
  hugeXXFontSize: {
    fontSize: getFontSize({ size: "hugeXX", theme }),
  },
});

/**
 * @see https://material-ui.com/pt/guides/typescript/#using-createstyles-to-defeat-type-widening
 */
export const useStyles = makeStyles(styles, { name: "NatDSIcon" });

export default useStyles;
