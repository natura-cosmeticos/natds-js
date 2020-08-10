import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialBreadcrumbs, { BreadcrumbsProps as IBreadcrumbsProps } from "@material-ui/core/Breadcrumbs";

export { BreadcrumbsProps as IBreadcrumbsProps } from "@material-ui/core/Breadcrumbs";

export const Breadcrumbs: FunctionComponent<IBreadcrumbsProps> = forwardRef((props: IBreadcrumbsProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any) => <MaterialBreadcrumbs {...props} ref={ref} />);

Breadcrumbs.displayName = "Breadcrumbs";

export default withTheme(Breadcrumbs);
