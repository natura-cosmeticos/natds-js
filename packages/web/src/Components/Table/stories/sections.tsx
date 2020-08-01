import * as React from "react";

import { TableHeaderCell } from "./TableHeaderCell"
import { TableWrapper } from "./TableWrapper"
import { TableWithSelectWrapper } from "./TableWithSelectWrapper"
import { HeaderWrapper } from "./HeaderWrapper"

export const tableContainerVariant = [
  {
    title: "standard",
    component: <TableWrapper/>,
  },
];

export const tableContainerAttribute = [
  {
    title: "rounded: on",
    component: <TableWrapper rounded/>,
  },
  {
    title: "dividers: none",
    component: <TableWrapper dividers={false}/>,
  },
  {
    title: "striped: none",
    component: <TableWrapper striped={false}/>,
  },
  {
    title: "Table Header Cell / Ordination desc",
    component: <HeaderWrapper active direction={"desc"}/>,
  },
  {
    title: "Table Header Cell / Ordination asc",
    component: <HeaderWrapper active direction={"asc"}/>,
  },
  {
    title: "Table Header Cell / Ordination order",
    component: <HeaderWrapper active/>,
  },
  {
    title: "Table Header Cell / Selection control",
    component: <TableHeaderCell/>,
  },
  {
    title: "Table Header Cell / Selection control",
    component: <TableHeaderCell/>,
  },
  {
    title: "Table Header Cell / Selection control indeterminate",
    component: <TableHeaderCell indeterminate/>,
  },
  {
    title: "Table Data Cell / Align: Left",
    component: <TableWrapper align={"left"} />,
  },
  {
    title: "Table Data Cell / Align: Center",
    component: <TableWrapper align={"center"}/>,
  },
  {
    title: "Table Data Cell / Align: Right",
    component: <TableWrapper align={"right"}/>,
  },
  {
    title: "Row / Selected",
    component: <TableWithSelectWrapper align={"center"}/>,
  },
];
