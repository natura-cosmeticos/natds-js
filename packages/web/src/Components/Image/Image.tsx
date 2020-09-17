import * as React from "react";
import useTheme from "@material-ui/core/styles/useTheme";
import clsx from "clsx";
import { ImageProps } from "./Image.props";
import { useStyles } from "./Image.styles";
import { getSizeFromProp } from "../shared/getSizeFromProp";
import { IThemeWeb } from "../../Themes";

export { ImageProps } from "./Image.props";

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (props: ImageProps, ref) => {
    const {
      alt, className, draggable, disableSelection, height, maxHeight, maxWidth, style, width, ...otherProps
    } = props;

    const classes = useStyles({
      alt, disableSelection, height, maxHeight, maxWidth, width,
    });

    const theme : IThemeWeb = useTheme();

    const heightAttribute = getSizeFromProp({
      sizePropValue: height,
      themeSizes: theme.sizes,
    });
    const widthAttribute = getSizeFromProp({
      sizePropValue: width,
      themeSizes: theme.sizes,
    });

    return (
      <img
        alt={alt}
        className={clsx(classes.root, className)}
        draggable={draggable}
        height={heightAttribute === "auto" ? "" : heightAttribute}
        ref={ref}
        style={style}
        width={widthAttribute === "auto" ? "" : widthAttribute }
        {...otherProps}
      />
    );
  },
);

Image.displayName = "Image";

export default Image;
