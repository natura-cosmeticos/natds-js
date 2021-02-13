/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import MaterialCircularProgress from "@material-ui/core/CircularProgress";
import { IProgressIndicatorProps } from "./ProgressIndicator.props";
import { useStyles } from "./ProgressIndicator.styles";

/**
 * ```
 * import { ProgressIndicator } from "@naturacosmeticos/natds-web"
 * ```
 */

export const ProgressIndicator = ({ layer = false, size = 48, ...props }: IProgressIndicatorProps) => {
  const { circularLayer } = useStyles(props);

  return (
    <>
      {layer
        ? <div className={circularLayer}>
          <MaterialCircularProgress {...props} size={size} />
        </div>
        : <MaterialCircularProgress {...props} size={size}/>
      }
    </>
  );
};

ProgressIndicator.displayName = "ProgressIndicator";

/**
 * @deprecated `CircularProgress` component will be deprecated soon.
 * Use `ProgressIndicator` instead
 */
export const CircularProgress = ProgressIndicator;

export default { CircularProgress, ProgressIndicator };
