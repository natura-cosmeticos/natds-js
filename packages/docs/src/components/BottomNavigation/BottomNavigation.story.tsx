import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";
import { BottomNavigation } from "@naturacosmeticos/natds-web";

import BottomNavigationDocs from "./BottomNavigation.docs.mdx";

export { Interactive } from "./Interactive";

export default {
  title: "Components|BottomNavigation",
  component: BottomNavigation,
  decorators: [
    withJest(), withContainer,
  ],
  parameters: {
    jestImportPath: "web",
    jest: [
      "BottomNavigation", "BottomNavigationAction",
    ],
    theme: {
      context: "web",
    },
    docs: {
      page: BottomNavigationDocs,
    },
  },
};
