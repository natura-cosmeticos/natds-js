import * as React from "react";

import { boolean, select } from "@storybook/addon-knobs";
import { getDefaultDecorators, getComponentParams } from "../../../.storybook";

import {tableAlignOptions} from "./stories/tableAlignOptions";
import {dataTable, IDataTable} from "./stories/exampleDataTable";

import Checkbox from "../Checkbox";
import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableContainer from "./TableContainer";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import {handleSelectAllClick} from "./functions/handleSelectAllClick";
import {handleIndeterminate} from "./functions/handleIndeterminate";
import {handleChecked} from "./functions/handleChecked";
import {handleSelect} from "./functions/handleSelect";

export default {
  title: "Playground|Table",
  component: [Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow],
  decorators: getDefaultDecorators(),
  parameters: getComponentParams(["Table"]),
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Interactive = () => {

  const dividersOption = boolean("Table Divided", true);
  const roundedOption = boolean("Table Rounded", true);
  const selectAlignOption = select("Align", tableAlignOptions, tableAlignOptions.center) as keyof typeof tableAlignOptions;
  const stripedOption = boolean("Table Striped", true);

  const [dataState, setSelected] = React.useState<IDataTable[]>(dataTable);

  return (
    <TableContainer>
      <Table
        aria-label="simple table"
        dividers={dividersOption}
        striped={stripedOption}
        rounded={roundedOption}>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Checkbox
                color="primary"
                onChange={handleSelectAllClick({dataState, setSelected})}
                checked={handleChecked(dataState)}
                indeterminate={handleIndeterminate({dataState})}
                inputProps={{ "aria-label": "Checkbox header" }}
              />
            </TableCell>
            <TableCell align={selectAlignOption}>Header Cell</TableCell>
            <TableCell align={selectAlignOption}>Header Cell</TableCell>
            <TableCell align={selectAlignOption}>Header Cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataState.map((item) => (
            <TableRow
              key={item.id}
              onClick={(event) => handleSelect({dataState, setSelected})(event, item)}
              selected={item.selected}>
              <TableCell align="center">
                <Checkbox
                  color="primary"
                  checked={item.selected}
                  inputProps={{ "aria-label": "Checkbox Cell" }}
                />
              </TableCell>
              <TableCell align={selectAlignOption}>{item.title}</TableCell>
              <TableCell align={selectAlignOption}>{item.title}</TableCell>
              <TableCell align={selectAlignOption}>{item.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
