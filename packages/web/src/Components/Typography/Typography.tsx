import * as React from "react";
import { withTheme } from "@material-ui/styles";
import MaterialTypography from "@material-ui/core/Typography";
import {ITypographyProps} from "./ITypographyProps";

export const Typography: React.FunctionComponent<ITypographyProps> = React.forwardRef((
  props: ITypographyProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
    variant = "body1",
    align = "inherit",
    ...rest
  } = props;

  return (
    <MaterialTypography
      variant={variant}
      align={align}
      ref={ref}
      {...rest}
    >
      {props.children}
    </MaterialTypography>
  );
});

Typography.displayName = "Typography";

export default withTheme(Typography);
