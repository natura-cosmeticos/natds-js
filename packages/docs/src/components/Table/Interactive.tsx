import * as React from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@naturacosmeticos/natds-web";
import { boolean, select } from "@storybook/addon-knobs";
import {tableAlignOptions} from "./tableAlignOptions";
import {dataTable, IDataTable} from "./exampleDataTable";

export const Interactive = () => {

  const dividersOption = boolean("Table Divided", true);
  const roundedOption = boolean("Table Rounded", true);
  const selectAlignOption = select("Align", tableAlignOptions, tableAlignOptions.center) as keyof typeof tableAlignOptions;
  const stripedOption = boolean("Table Striped", true);

  const [dataState, setSelected] = React.useState<IDataTable[]>(dataTable);

  const handleSelect = (event: React.MouseEvent<unknown>, item: IDataTable) => {
    let modifiedTable: IDataTable[] = [];

    modifiedTable = dataState.map((auxItem) => {
      if (auxItem.id === item.id) {
        const updatedAuxItem = auxItem;

        updatedAuxItem.selected = !updatedAuxItem.selected;

        return updatedAuxItem;
      }

      return auxItem;
    });

    setSelected(modifiedTable);
  };

  // @todo refactor(docs): extract duplicated code for handleSelectAllClick
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    let auxiliaryTable: IDataTable[] = [];

    auxiliaryTable = dataState.map((auxItem) => {
      const updatedAuxItem = auxItem;

      updatedAuxItem.selected = event.target.checked;

      return updatedAuxItem;
    });

    setSelected(auxiliaryTable);
  };

  // @todo refactor(docs): extract duplicated code for handleIndeterminate
  const handleIndeterminate = (data: IDataTable[]) => {
    const numSelected = data.filter((item) => item.selected).length;

    return numSelected > 0 && numSelected < data.length;
  };

  // @todo refactor(docs): extract duplicated code for handleChecked
  const handleChecked = (data: IDataTable[]) => data.every((item) => item.selected);

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
                onChange={handleSelectAllClick}
                checked={handleChecked(dataState)}
                indeterminate={handleIndeterminate(dataState)}
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
              onClick={(event) => handleSelect(event, item)}
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
