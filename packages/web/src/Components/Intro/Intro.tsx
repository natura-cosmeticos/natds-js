// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { Typography } from "../Typography";
import { IIntroProps } from "./Intro.props";
import useStyles from "./Intro.styles";

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
    children,
    component: Component = "section",
    detail,
    detailColor = "textPrimary",
    detailComponent: DetailComponent = Typography,
    detailVariant = "body2",
    title,
    titleColor = "textPrimary",
    titleComponent: TitleComponent = Typography,
    titleVariant = "subtitle1",
    ...otherProps
  } = props;

  const { introDetail, introTitle, root } = useStyles();

  return (
    <Component className={root} ref={ref} {...otherProps}>
      <TitleComponent
        className={introTitle}
        color={titleColor}
        component={"h3"}
        variant={titleVariant}
      >{title}</TitleComponent>
      {detail && <DetailComponent
        className={introDetail}
        color={detailColor}
        component={"p"}
        variant={detailVariant}
      >{detail}</DetailComponent>}
      {children}
    </Component>
  );
});

Intro.displayName = "Intro";

export default Intro;
