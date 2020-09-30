import * as React from "react";

import MaterialContainer from "@material-ui/core/Container";
import { IContainerProps } from "./Container.props";

export { IContainerProps } from "./Container.props";

/**
 * The container centers your content horizontally. It's most the basic layout element.<br />
 * While containers can be nested, most layouts do not require a nested container.
 *
 * ## Import
 *
 * ```
 * import { Container } from "@naturacosmeticos/natds-react"
 * ```
 */
export const Container = React.forwardRef<unknown, IContainerProps>(
  (props: IContainerProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any) => <MaterialContainer {...props} ref={ref} />,
);

Container.displayName = "Container";
export default Container;
