import * as React from "react";
import {
  GridContainer, GridItem, Spacing,
} from "@naturacosmeticos/natds-web";
import Section from "../Section";
import EarningsProducts from "../EarningsProducts";
import EarningsProfits from "../EarningsProfits";
import EarningsSalesChips from "../EarningsSalesChips";

export const EarningsSection : React.FunctionComponent = () => (
  <Section title={"Ganhos como Consultora"}
    detail={"Veja como você lucra com um conjunto especial de produtos, na venda pessoal ou pela Internet"}>
    <Spacing marginBottom={"semiX"} marginTop={"semiX"}>
      <EarningsSalesChips />
    </Spacing>
    <GridContainer spacing={2}>
      <GridItem md={8}>
        <EarningsProducts />
      </GridItem>
      <GridItem md={4}>
        <EarningsProfits />
      </GridItem>
    </GridContainer>
  </Section>
);

export default EarningsSection;
