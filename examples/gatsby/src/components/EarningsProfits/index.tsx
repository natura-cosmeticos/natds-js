import { Divider, Typography } from "@naturacosmeticos/natds-web";
import * as React from "react";

export const EarningsProfits : React.FunctionComponent = () => (
  <>
    <Typography gutterBottom={true} paragraph={true} variant={"body2"}>
    Sua cliente compra esse conjunto por: <strong>R$ 279,80</strong>
    </Typography>
    <Divider />
    <Typography gutterBottom={true} paragraph={true} variant={"body2"}>
    O lucro dessa venda presencial, de acordo com o nível da Consultora, é:
    </Typography>
  </>
);

export default EarningsProfits;
