/* eslint-disable max-len */
import {
  GridContainer, GridItem, Image, Paper,
} from "@naturacosmeticos/natds-web";
import * as React from "react";
import EarningsProductList from "../EarningsProductList";

export const EarningsProducts : React.FunctionComponent = () => (
  <Paper>
    <GridContainer spacing={3}>
      <GridItem xs={12} sm={5}>
        <Image
          alt={"Produtos"}
          src={"https://accounts.natura.com/queroserconsultora/static/products-image-1a86a0debd8ee7933f1da86efa2c2e9f.svg"}
          style={{ height: "auto", maxWidth: "100%" }}/>
      </GridItem>
      <GridItem xs={12} sm={7}>
        <EarningsProductList />
      </GridItem>
    </GridContainer>
  </Paper>
);

export default EarningsProducts;
