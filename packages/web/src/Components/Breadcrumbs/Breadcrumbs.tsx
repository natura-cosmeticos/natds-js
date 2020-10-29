import * as React from "react";
import MaterialBreadcrumbs from "@material-ui/core/Breadcrumbs";

import { IBreadcrumbsProps } from "./Breadcrumbs.props";

export { IBreadcrumbsProps } from "./Breadcrumbs.props";

/**
 * ## Importing
 *
 * ```
 * import { Breadcrumbs } from "@naturacosmeticos/natds-web
 * ```
 */
export const Breadcrumbs = React.forwardRef<HTMLElement, IBreadcrumbsProps>(
  (props: IBreadcrumbsProps, ref) => <MaterialBreadcrumbs {...props} ref={ref} />);

Breadcrumbs.displayName = "Breadcrumbs";

export default Breadcrumbs;
