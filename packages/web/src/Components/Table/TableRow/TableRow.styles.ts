// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import hexToRgba from "hex-to-rgba";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { IThemeWeb } from "../../../Themes";

const rgbAlpha = 0.16;

export const style = (theme: IThemeWeb) => {

  console.log(theme);

  const styles = {
    selected: {},
  };

  if (theme.palette && theme.palette.primary && theme.palette.primary.main) {

    /**
     * @todo refactor: replace with a solid color and remove !important
     */
    styles.selected = {
      backgroundColor: `${hexToRgba(theme.palette.primary.main, rgbAlpha)} !important`,
    };
  }

  return createStyles(styles);

};

export const useStyles = makeStyles(style);

export default useStyles;
