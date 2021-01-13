// eslint-disable-next-line no-use-before-define
import * as React from "react";
import MaterialRating from "@material-ui/lab/Rating";
import clsx from "clsx";
import { IRatingProps } from "./Rating.props";
import { Icon } from "../Icon";
import useStyles from "./Rating.styles";

export { IRatingProps } from "./Rating.props";

/**
 * ## Importing
 *
 * ```
 * import { Rating } from '@naturacosmeticos/natds-web';
 * ```
 */

export const Rating = React.forwardRef<HTMLDivElement, IRatingProps>(
  (props: IRatingProps, ref) => {
    const {
      className,
      size,
      rate,
    } = props;

    const classes = useStyles({ size });

    const classNames = clsx([
      className,
      classes.root,
    ]);

    return <MaterialRating
      ref={ref}
      classes={{ iconEmpty: classes.iconEmpty }}
      value={rate}
      max={5}
      name="rating"
      readOnly={true}
      icon={<Icon className={classNames} name={"filled-action-rating"}/>}
    />;
  });

Rating.displayName = "Rating";

Rating.defaultProps = {
  size: "small",
};

export default Rating;
