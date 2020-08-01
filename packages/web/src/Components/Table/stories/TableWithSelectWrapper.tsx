import * as React from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@naturacosmeticos/natds-web";
import Container from "@material-ui/core/Container";
import {ITableWithSelectWrapper} from "./ITableWithSelectWrapper";
import {dataTable, IDataTable} from "./exampleDataTable";

export const TableWithSelectWrapper = ({
  align,
  dividers,
  rounded,
  striped,
}: ITableWithSelectWrapper) => {

  const [dataState, setSelected] = React.useState<IDataTable[]>(dataTable);

  const handleSelect = (event: React.MouseEvent<unknown>, item: IDataTable) => {
    let auxiliaryTable: IDataTable[] = [];

    auxiliaryTable = dataState.map((auxItem) => {

      const updatedAuxItem = auxItem;

      if (auxItem.id === item.id) {
        updatedAuxItem.selected = !updatedAuxItem.selected;
      }

      return updatedAuxItem;
    });

    setSelected(auxiliaryTable);
  };

  // @todo: refactor(docs): extract duplicated code for handleSelectAllClick
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    let auxiliaryTable: IDataTable[] = [];

    auxiliaryTable = dataState.map((auxItem) => {
      const updatedAuxItem = auxItem;

      updatedAuxItem.selected = event.target.checked;

      return updatedAuxItem;
    });

    setSelected(auxiliaryTable);
  };

  // @todo: refactor(docs): extract duplicated code for handleIndeterminate
  const handleIndeterminate = (data: IDataTable[]) => {
    const selectedRows = data.filter((item) => item.selected).length;

    return selectedRows > 0 && selectedRows < data.length;
  };

  // @todo: refactor(docs): extract duplicated code for handleIndeterminate and handleChecked
  const handleChecked = (data: IDataTable[]) => data.every((item) => item.selected);

  return (
    <Container>
      <Table
        aria-label="simple table"
        dividers={dividers}
        striped={striped}
        rounded={rounded}>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Checkbox
                checked={handleChecked(dataState)}
                color="primary"
                indeterminate={handleIndeterminate(dataState)}
                onChange={handleSelectAllClick}
              />
            </TableCell>
            <TableCell align={align}>Header Cell</TableCell>
            <TableCell align={align}>Header Cell</TableCell>
            <TableCell align={align}>Header Cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataState.map((item) => (
            <TableRow
              key={item.id}
              onClick={(ev) => handleSelect(ev, item)}
              selected={item.selected}>
              <TableCell align="center">
                <Checkbox
                  color="primary"
                  checked={item.selected}
                />
              </TableCell>
              <TableCell align={align}>{item.title}</TableCell>
              <TableCell align={align}>{item.title}</TableCell>
              <TableCell align={align}>{item.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};
