import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";
import { AppBar } from "@naturacosmeticos/natds-web";

import AppBarDocs from "./AppBar.docs.mdx";

export default {
  "title": "Components|AppBar",
  "component": AppBar,
  "decorators": [
    withJest(),
    withContainer
  ],
  "parameters": {
    "jestImportPath": "web",
    "jest": ["AppBar"],
    "theme": {
      "context": "web"
    },
    "docs": {
      "page": AppBarDocs
    }
  }
};

export { Interactive } from "./Interactive";
