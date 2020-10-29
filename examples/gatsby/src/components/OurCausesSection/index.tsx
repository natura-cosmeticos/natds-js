import * as React from "react";
import { Spacing, Typography } from "@naturacosmeticos/natds-web";
import Section from "../Section";
import OurCausesCards from "../OurCausesCards";
import CallToAction from "../CallToAction";

export const OurCausesSection : React.FunctionComponent = () => (
  <Section title={"Nossas causas"}
    detail={"O que uma marca de beleza pode fazer pelo mundo?"}>
    <Spacing marginTop={"semi"} />
    <OurCausesCards />
    <Typography align={"center"}>
      <CallToAction href={"#"}>Quero me cadastrar</CallToAction>
    </Typography>
  </Section>
);

export default OurCausesSection;
