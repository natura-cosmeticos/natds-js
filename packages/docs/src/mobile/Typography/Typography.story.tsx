import { Typography } from "@naturacosmeticos/natds-rn";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/container";

export { Variants } from "./Variants";
export { Colors } from "./Colors";
export { Align } from "./Align";

import TypographyDocs from "./Typography.mdx";

export default {
  title: "Mobile|Typography",
  component: Typography,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: "mobile",
    jest: ["Typography"],
    theme: "mobile",
    docs: {
      page: TypographyDocs
    }
  }
};
