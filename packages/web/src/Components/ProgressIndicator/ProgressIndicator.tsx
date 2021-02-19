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

export const ProgressIndicator = (props: IProgressIndicatorProps) => {
  const { showLayer = false, size = 48, ...otherProps } = props;
  const { circularLayer } = useStyles(props);

  return (
    <>
      {showLayer
        ? <div className={circularLayer}>
          <MaterialCircularProgress {...otherProps} size={size} />
        </div>
        : <MaterialCircularProgress {...otherProps} size={size}/>
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
