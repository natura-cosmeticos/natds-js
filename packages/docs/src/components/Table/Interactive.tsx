import * as React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox
} from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';
import { boolean, select } from '@storybook/addon-knobs';

export const Interactive = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    }
  }));
  const classes = useStyles();

  const roundedOption = boolean('Table Rounded', true);
  const dividersOption = boolean('Table Divided', true);
  const stripedOption = boolean('Table Striped', true);

  const tableAlignOptions: any = {
    center: 'center',
    inherit: 'inherit',
    justify: 'justify',
    left: 'left',
    right: 'right'
  };

  const selectAlignOption = select('Align', tableAlignOptions, tableAlignOptions.center);

  const dataTable = [
    { id: 1, title: 'Cell', selected: false },
    { id: 2, title: 'Cell', selected: false },
    { id: 3, title: 'Cell', selected: false },
    { id: 4, title: 'Cell', selected: false }
  ];

  type IDataTable = {
    id: number,
    title: string,
    selected: boolean
  };

  const [dataState, setSelected] = React.useState<IDataTable[]>(dataTable);

  const handleSelect = (event: React.MouseEvent<unknown>, item: IDataTable) => {
    let modifiedTable: IDataTable[] = [];

    modifiedTable = dataState.map(auxItem => {
      if (auxItem.id === item.id) {
        auxItem.selected = !auxItem.selected;
      }
      return auxItem;
    });

    setSelected(modifiedTable);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    let auxiliaryTable: IDataTable[] = [];

    auxiliaryTable = dataState.map(auxItem => {
      auxItem.selected = event.target.checked;
      return auxItem;
    });

    setSelected(auxiliaryTable);
  };

  const handleIndeterminate = (data: IDataTable[]) => {
    const numSelected = data.filter(item => item.selected).length;

    return numSelected > 0 && numSelected < data.length;
  };

  const handleChecked = (data: IDataTable[]) => data.every(item => item.selected);

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
                inputProps={{ 'aria-label': 'Checkbox header' }}
              />
            </TableCell>
            <TableCell align={selectAlignOption}>Header Cell</TableCell>
            <TableCell align={selectAlignOption}>Header Cell</TableCell>
            <TableCell align={selectAlignOption}>Header Cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataState.map(item => {
            return (
              <TableRow
                key={item.id}
                onClick={(event) => handleSelect(event, item)}
                selected={item.selected}>
                <TableCell align="center">
                  <Checkbox
                    color="primary"
                    checked={item.selected}
                    inputProps={{ 'aria-label': 'Checkbox Cell' }}
                  />
                </TableCell>
                <TableCell align={selectAlignOption}>{item.title}</TableCell>
                <TableCell align={selectAlignOption}>{item.title}</TableCell>
                <TableCell align={selectAlignOption}>{item.title}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

