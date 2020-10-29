import {
  Container, GridContainer, GridItem, Spacing, Typography,
} from "@naturacosmeticos/natds-web";
import * as React from "react";
import CopyrightText from "../CopyrightText";
import { FooterMenu } from "../FooterMenu";
import { FooterPhones } from "../FooterPhones";

export const Footer : React.FunctionComponent = () => (
  <footer>
    <Container>
      <GridContainer>
        <GridItem xs={12} sm={9}>
          <Typography component={"h2"} gutterBottom={true} variant={"overline"}>Veja também</Typography>
          <FooterMenu />
          <Spacing marginTop={"semi"}><CopyrightText /></Spacing>
        </GridItem>
        <GridItem xs={12} sm={3}><FooterPhones /></GridItem>
      </GridContainer>
    </Container>
  </footer>
);

export default Footer;
