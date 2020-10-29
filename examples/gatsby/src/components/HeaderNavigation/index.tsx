import { TabContainer, TabItem } from "@naturacosmeticos/natds-web";
import * as React from "react";

export const HeaderNavigation : React.FunctionComponent = () => (
  <TabContainer value={"home"}>
    <TabItem label={"Home"} value={"home"} />
    <TabItem label={"Vantagens"} value={"vantagens"} />
    <TabItem label={"Ganhos como Consultora"} value={"ganhos-como-consultora"} />
    <TabItem label={"Nossas causas"} value={"nossas-causas"} />
    <TabItem label={"Ajuda"} value={"ajuda"} />
  </TabContainer>
);

export default HeaderNavigation;
