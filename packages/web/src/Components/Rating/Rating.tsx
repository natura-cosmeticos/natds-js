// eslint-disable-next-line no-use-before-define
import * as React from "react";
import MaterialRating from "@material-ui/lab/Rating";

/**
 * ## Importing
 *
 * ```
 * import { Rating } from '@naturacosmeticos/natds-web';
 * ```
 */

export const Rating = React.forwardRef<HTMLDivElement>(
  () => {
    return <MaterialRating
      name="rating"
      readOnly={true}
    />;
  });

Rating.displayName = "Rating";

export default Rating;