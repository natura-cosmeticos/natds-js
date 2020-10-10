import {
  Paper, Spacing, Typography,
} from "@naturacosmeticos/natds-web";
import * as React from "react";
import { CallToAction } from "../CallToAction";

export const HeroCard : React.FunctionComponent = () => (
  <Paper elevation={13}>
    <Spacing padding={"standard"} paddingBottom={"large"}>
      <Typography component={"h2"} gutterBottom={true} variant={"h4"}>
        Com a Consultoria&nbsp;Natura <span aria-label={"você pode mais"}>#VocêPodeMais</span>
      </Typography>
      <Typography
        component={"p"}
        paragraph={true}
        variant={"h6"}>Seja uma Consultora Natura e tenha lucros, prêmios e muito&nbsp;mais!</Typography>
      <CallToAction aria-label={"Cadastrar"} fullWidth={true} href={"#"}>Clique aqui para se cadastrar</CallToAction>
    </Spacing>
  </Paper>
);

export default HeroCard;
