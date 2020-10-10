import { Spacing, Typography } from "@naturacosmeticos/natds-web";
import * as React from "react";
import CallToAction from "../CallToAction";
import Section from "../Section";
import BenefitCards from "../BenefitCards";

export const BenefitsSection : React.FunctionComponent = () => (
  <Section
    detail={"O que uma marca de beleza pode fazer pelas suas consultoras?"}
    title={"Vantagens de ser uma Consultora Natura"}>
    <Spacing marginBottom={"standard"} marginTop={"large"}>
      <BenefitCards />
    </Spacing>
    <Typography align={"center"}>
      <CallToAction href={"#"}>Quero ser Consultora&nbsp;Natura</CallToAction>
    </Typography>
  </Section>
);

export default BenefitsSection;
