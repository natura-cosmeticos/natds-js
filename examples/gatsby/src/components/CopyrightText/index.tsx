import * as React from "react";
import { Typography } from "@naturacosmeticos/natds-web";

export const CopyrightText : React.FunctionComponent = () => (
  <Typography
    color={"textSecondary"}
    component={"p"}
    gutterBottom={true}
    paragraph={true}
    variant={"caption"}>
    &copy; 2020 Natura. Todos os direitos reservados.
  </Typography>
);

export default CopyrightText;
