import * as React from "react";
import MaterialTypography from "@material-ui/core/Typography";
import { ITypographyProps } from "./Typography.props";

export { ITypographyProps } from "./Typography.props";

export const Typography = React.forwardRef<HTMLSpanElement | HTMLElement, ITypographyProps>((
  props: ITypographyProps, ref,
) => {
  const {
    align, children, variant, ...rest
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
