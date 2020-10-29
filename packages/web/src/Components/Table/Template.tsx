import * as React from "react";
import { Story } from "@storybook/react";
import { ITableProps } from "./Table.props";
import exampleDataTable, { IExampleDataTable } from "./__fixtures__/exampleDataTable";
import { TableContainer } from "./TableContainer";
import { Table } from "./Table";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { Checkbox } from "../Checkbox";
import { ForTableCell, ForTableHeader } from "../Checkbox/Checkbox.stories";
import { TableBody } from "./TableBody";

export const Template : Story<ITableProps> = (args: ITableProps) => {

  const [data, setData] = React.useState<IExampleDataTable>(exampleDataTable);

  const handleSelect = (event, item) => {

    setData((value) => {
      const auxiliaryTable : IExampleDataTable = value.map((row) => {
        if (row.id !== item.id) {
          return row;
        }

        return {
          ...row,
          selected: !row.selected,
        };
      });

      return auxiliaryTable;
    });
  };

  const handleSelectAllClick = (event) => {

    setData((value) => {
      const auxiliaryTable : IExampleDataTable = value.map((row) => ({
        ...row,
        selected: event.target.checked,
      }));

      return auxiliaryTable;

    });
  };

  const checked = () => data.every((item) => item.selected);
  const indeterminate = () => {
    const selectedRows = data.filter((item) => item.selected).length;
    const NO_ROW_SELECTED = 0;

    return selectedRows > NO_ROW_SELECTED && selectedRows < data.length;
  };

  return (
    <TableContainer>
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableCell align={"center"}>
              <Checkbox {...ForTableHeader.args}
                onChange={handleSelectAllClick}
                checked={checked()}
                indeterminate={indeterminate()}
              />
            </TableCell>
            <TableCell>Header cell</TableCell>
            <TableCell>Header cell</TableCell>
            <TableCell>Header cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              onClick={(event) => handleSelect(event, item)}
              selected={item.selected}>
              <TableCell align={"center"}>
                <Checkbox {...ForTableCell.args} checked={item.selected} />
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Template;
