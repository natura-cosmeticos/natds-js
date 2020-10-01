/* eslint-disable indent,@typescript-eslint/no-explicit-any */
import * as React from "react";
import { Typography } from "../Typography";
import { IIntroProps } from "./Intro.props";
import { IntroDetails } from "./IntroDetails";
import { useDefaultTheme } from "../../hooks/useDefaultTheme";
import { IntroTitle } from "./IntroTitle";
import { IntroContainer } from "./IntroContainer";

export { IIntroProps } from "./Intro.props";

/**
 * ## Importing
 *
 * ```
 * import { Intro } from '@naturacosmeticos/natds-web';
 * ```
 */
export const Intro = React.forwardRef<HTMLDivElement, IIntroProps>((
  props: IIntroProps, ref,
) => {
  const {
    detail,
    detailColor = "textPrimary",
    detailComponent,
    detailVariant = "body2",
    title,
    titleColor = "textPrimary",
    titleComponent,
    titleVariant = "subtitle1",
    ...rest
  } = props;

  const theme = useDefaultTheme();

  return (
    <IntroContainer ref={ref} {...rest}>
      <IntroTitle
        as={Typography}
        theme={theme}
        component={titleComponent}
        variant={titleVariant}
        color={titleColor}
      >{title}</IntroTitle>
      {detail && <IntroDetails
        as={Typography}
        theme={theme}
        component={detailComponent}
        variant={detailVariant}
        color={detailColor}
      >{detail}</IntroDetails>}
    </IntroContainer>
  );
});

Intro.displayName = "Intro";

export default Intro;
