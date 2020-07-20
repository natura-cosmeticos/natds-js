import * as React from "react";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@naturacosmeticos/natds-web";

import TableDocs from "./Table.docs.mdx";

export default {
  title: "Components|Table",
  component: [Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow],
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: "web",
    jest: ["Table"],
    theme: {
      context: "web",
    },
    docs: {
      page: TableDocs,
    },
  },
};

export { Interactive } from "./Interactive";
