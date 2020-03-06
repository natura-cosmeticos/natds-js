import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialBreadcrumbs, { BreadcrumbsProps as IBreadcrumbsProps } from '@material-ui/core/Breadcrumbs';
export { BreadcrumbsProps as IBreadcrumbsProps } from '@material-ui/core/Breadcrumbs';

export const Breadcrumbs: FunctionComponent<IBreadcrumbsProps> = forwardRef(
  (props: IBreadcrumbsProps, ref: any) => (
    <MaterialBreadcrumbs {...props} ref={ref} />
  )
);

export default withTheme(Breadcrumbs);
