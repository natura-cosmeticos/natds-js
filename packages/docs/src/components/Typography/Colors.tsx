import * as React from "react";
import { Typography } from "@naturacosmeticos/natds-web";

export const Colors = () => <div className="typography__story__container">
  <div className="typography__story__item">
    <Typography variant="h5">Default/Inherit color</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="h5" color="initial">Initial color</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="h5" color="primary">Primary color</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="h5" color="secondary">Secondary color</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="h5" color="textPrimary">Text Primary color</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="h5" color="textSecondary">Text Secondary color</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="h5" color="error">Error color</Typography>
  </div>
</div>;

