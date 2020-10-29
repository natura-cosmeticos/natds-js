import * as React from "react";
import { Chip, Typography } from "@naturacosmeticos/natds-web";

const EarningsSalesChips : React.FunctionComponent = () => (
  <Typography align={"center"}>
    <Chip clickable={true} color={"primary"} label={"Vendas presenciais"} />
    &nbsp;
    <Chip clickable={true} color={"primary"} label={"Vendas pela Internet"} variant={"outlined"} />
  </Typography>
);

export default EarningsSalesChips;
