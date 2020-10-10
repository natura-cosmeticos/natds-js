import {
  Container, IContainerProps, IIntroProps, Intro, Spacing,
} from "@naturacosmeticos/natds-web";
import * as React from "react";
import * as PropTypes from "prop-types";

type Props = {
  children: IIntroProps["children"],
  detail?: IIntroProps["detail"],
  maxWidth?: IContainerProps["maxWidth"],
  title: IIntroProps["title"],
}

export const Section : React.FunctionComponent<Props> = (props) => {

  const {
    children, detail, maxWidth = "md", title, ...otherProps
  } = props;

  return (
    <Intro
      title={title} titleComponent={"h2"} titleVariant={"h5"}
      detail={detail} detailComponent={"p"} detailVariant={"body1"}
      {...otherProps}>
      <Container maxWidth={maxWidth}>{children}</Container>
      <Spacing marginTop={"large"} />
    </Intro>
  );

};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  detail: PropTypes.node,
  maxWidth: PropTypes.oneOf([
    false,
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
  ]),
  title: PropTypes.node.isRequired,
};

export default Section;
