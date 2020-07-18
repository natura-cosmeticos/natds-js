import * as React from "react";
import { Typography } from "@naturacosmeticos/natds-web";

import "./style.scss";

export const Variants = () => <div className="typography__story__container">
  <div className="typography__story__item">
    <Typography variant="h1">h1. Heading1</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="h2">h2. Heading2</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="h3">h3. Heading3</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="h4">h4. Heading4</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="h5">h5. Heading5</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="h6">h6. Heading6</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="subtitle1">subtitle1. Lorem ipsum ziguium</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="subtitle2">subtitle2. Lorem ipsum ziguium</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="body1">body1. Lorem ipsum ziguium</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="body2">body2. Lorem ipsum ziguium</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="caption">caption. Lorem ipsum ziguium</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="button">button. BUTTON TEXT</Typography>
  </div>
  <div className="typography__story__item">
    <Typography variant="overline">overline. Lorem ipsum ziguium</Typography>
  </div>
</div>;

