/* eslint-disable max-len */
import * as React from "react";
import { Spacing } from "@naturacosmeticos/natds-web";
import { Section } from "../Section";
import { HelpFaq } from "../HelpFaq";

export const HelpSection : React.FunctionComponent = () => (
  <Section maxWidth={"sm"} title={"Ajuda"}>
    <Spacing marginTop={"semi"} />
    <HelpFaq />
  </Section>
);

export default HelpSection;
