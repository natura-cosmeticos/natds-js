import * as React from "react";
import MaterialSkeleton from "@material-ui/lab/Skeleton";
import useTheme from "@material-ui/core/styles/useTheme";
import { ISkeletonProps } from "./Skeleton.props";
import { IThemeWeb } from "../../Themes";
import { getSizeStyleProp } from "../../hooks/useSizeStyleProp";

export { ISkeletonProps } from "./Skeleton.props";

/**
 * Display a placeholder preview of your content before the data gets loaded to reduce
 * load-time frustration.
 *
 * The data for your components might not be immediately available.<br />
 * You can increase the perceived performance for users by using skeletons.
 *
 * It feels like things are happening immediately, then the information is incrementally displayed on the screen.<br />
 * Read more on [Avoid The Spinner](https://www.lukew.com/ff/entry.asp?1797).
 *
 * ## Importing
 *
 * ```
 * import { Skeleton } from "@naturacosmeticos/natds-web";
 * ```
 */
export const Skeleton = React.forwardRef<HTMLDivElement, ISkeletonProps>(
  (props: ISkeletonProps, ref) => {
    const {
      height, width, ...otherProps
    } = props;

    const theme : IThemeWeb = useTheme();

    const heightAttribute = getSizeStyleProp({
      theme,
      value: height,
    });
    const widthAttribute = getSizeStyleProp({
      theme,
      value: width,
    });

    return <MaterialSkeleton
      {...otherProps}
      height={heightAttribute}
      width={widthAttribute}
      ref={ref} />;
  },
);

Skeleton.displayName = "Skeleton";
export default Skeleton;
