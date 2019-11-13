import * as React from "react";
import { Typography } from "@naturacosmeticos/natds-rn";

export const Align = () => {
  return (
    <div className="typography__story__container">
      <div className="typography__story__item typography__mobile__story__bordered">
        <Typography variant="h6">Default alignment</Typography>
      </div>
      <div className="typography__story__item typography__mobile__story__bordered">
        <Typography variant="h6" align="left">
          Left alignment
        </Typography>
      </div>
      <div className="typography__story__item typography__mobile__story__bordered">
        <Typography variant="h6" align="center">
          Center alignment
        </Typography>
      </div>
      <div className="typography__story__item typography__mobile__story__bordered">
        <Typography variant="h6" align="right">
          Right alignment
        </Typography>
      </div>
      <div className="typography__story__item typography__mobile__story__bordered">
        <Typography variant="h6" align="justify">
          Justified alignment
        </Typography>
      </div>
    </div>
  );
};
