import * as React from "react";
import {
  useSizeTokens, Icon, Spacing, Typography,
} from "@naturacosmeticos/natds-web";

export const FooterPhones : React.FunctionComponent = () => {

  const NEGATIVE = -1;
  const sizes = useSizeTokens();

  return <div>
    <Typography component={"h2"} gutterBottom={true} style={{ position: "relative" }} variant={"overline"}>
      <Icon name={"outlined-communication-treatment"} size={"micro"} style={{ position: "absolute", left: NEGATIVE * sizes.standard, top: sizes.micro }} />
      Central de Relacionamento
    </Typography>
    <Spacing marginBottom={"small"}/>
    <Typography component={"p"} paragraph={true} variant={"caption"}>0300 762 8872</Typography>
    <Typography component={"p"} paragraph={true} variant={"caption"}>0800 762 8872</Typography>
  </div>;
};

export default FooterPhones;
