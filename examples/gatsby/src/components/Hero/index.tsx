import {
  GridContainer, GridItem, Spacing, useSizeTokens,
} from "@naturacosmeticos/natds-web";
import * as React from "react";
import HeroCard from "../HeroCard";
import HeroImage from "../HeroImage";

const NEGATIVE = -1;

export const Hero : React.FunctionComponent = () => {

  const sizes = useSizeTokens();

  return (
    <GridContainer>
      <GridItem xs={12} md={8}>
        <HeroImage/>
      </GridItem>
      <GridItem xs={12} md={4}>
        <Spacing marginLeft={sizes.large * NEGATIVE} marginTop={"large"}>
          <HeroCard/>
        </Spacing>
      </GridItem>
    </GridContainer>
  );
};
