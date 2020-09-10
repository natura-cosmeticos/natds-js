import * as React from "react";
import MaterialTypography from "@material-ui/core/Typography";
import { ITypographyProps } from "./Typography.props";

export { ITypographyProps } from "./Typography.props";

// eslint-disable-next-line max-lines-per-function
export const Typography = React.forwardRef<unknown, ITypographyProps>((
  props: ITypographyProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
    align,
    children,
    variant,
    ...rest
  } = props;

  return (
    <MaterialTypography
      align={align}
      ref={ref}
      variant={variant}
      {...rest}
    >
      {children}
    </MaterialTypography>
  );
});

Typography.displayName = "Typography";

Typography.defaultProps = {
  align: "inherit",
  variant: "body1",
};

export default Typography;
