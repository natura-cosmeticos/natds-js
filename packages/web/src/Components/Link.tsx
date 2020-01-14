import React, { FunctionComponent } from 'react';
import MaterialLink, { LinkProps as ILinkProps, } from '@material-ui/core/Link';
import { withTheme } from '@material-ui/core';
export { LinkProps as ILinkProps } from '@material-ui/core/Link';

const Link: FunctionComponent<ILinkProps> = (props: ILinkProps) => (
  <MaterialLink {...props} />
);

export default withTheme(Link);
