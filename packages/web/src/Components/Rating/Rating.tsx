// eslint-disable-next-line no-use-before-define
import * as React from "react";
import MaterialRating from "@material-ui/lab/Rating";
import clsx from "clsx";
import { IRatingProps } from "./Rating.props";
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
      rate
    } = props;

    const classes = useStyles({ size });

    const classNames = clsx([
      className,
      classes.root,
    ]);

    return <MaterialRating
      className={classNames}
      value={rate}
      name="rating"
      readOnly={true}
      ref={ref}
    />;
  });

Rating.displayName = "Rating";

export default Rating;