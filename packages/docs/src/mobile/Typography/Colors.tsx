import * as React from "react";
import { Typography } from "@naturacosmeticos/natds-rn";

export const Colors = () => {
  return (
    <div className="typography__story__container">
      <div className="typography__story__item">
        <Typography variant="h5">Default color</Typography>
      </div>
      <div className="typography__story__item">
        <Typography variant="h5" color="text">
          Text color
        </Typography>
      </div>
      <div className="typography__story__item">
        <Typography variant="h5" color="primary">
          Primary color
        </Typography>
      </div>
      <div className="typography__story__item">
        <Typography variant="h5" color="secondary">
          Secondary color
        </Typography>
      </div>
      <div className="typography__story__item">
        <Typography variant="h5" color="accent">
          Accent color
        </Typography>
      </div>
      <div className="typography__story__item">
        <Typography variant="h5" color="error">
          Error color
        </Typography>
      </div>
    </div>
  );
};
