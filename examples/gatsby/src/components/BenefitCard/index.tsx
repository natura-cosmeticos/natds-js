import {
  Card, CardContent, CardMedia, ITypographyProps, Typography,
} from "@naturacosmeticos/natds-web";
import * as React from "react";
import * as PropTypes from "prop-types";

export type BenefitCardProps = {
  children: React.ReactNode,
  image: string,
  title: ITypographyProps["children"]
}

const BenefitCard : React.FunctionComponent<BenefitCardProps> = (props) => {

  const { children, image, title } = props;

  return (
    <Card>
      <CardMedia
        image={image}>
        <Typography component={"h3"} style={{ color: "#FFFFFF" }} variant={"h5"}>{title}</Typography>
      </CardMedia>
      <CardContent>
        <Typography paragraph={true} variant={"body2"}>{children}</Typography>
      </CardContent>
    </Card>
  );
};

BenefitCard.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
};

export default BenefitCard;
