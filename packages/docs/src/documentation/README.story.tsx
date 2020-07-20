import * as React from "react";
import { Typography } from "@naturacosmeticos/natds-web";
import tokensParams from "../tokens/shared";

import READMEDocs from "./README.docs.mdx";

const styles = {
  padding: "64px 20px",
  maxWidth: "400px",
};

const container = (story: any) => <div style={styles}>
  {story()}
</div>;

export default {
  title: "Documentation|README",
  parameters: {
    docs: {
      page: READMEDocs,
    },
    ...tokensParams,
    theme: "web",
  },
  decorators: [container],
};

export const README = () => <>
  <Typography variant="h5">
      README
  </Typography>
  <Typography variant="body1">
      Please, refer to the Docs tab above for the README information
  </Typography>
</>;
