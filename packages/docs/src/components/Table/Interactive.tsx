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
    right: 'right',
    left: 'left',
    center: 'center',
    inherit: 'inherit',
    justify: 'justify'
  };

  const selectAlignOption = select('Align', tableAlignOptions, tableAlignOptions.center)

  const dataTable = [
    {id: 1, title: 'Loren Ipsum dolor', selected: false},
    {id: 2, title: 'Loren Ipsum dolor', selected: false},
    {id: 3, title: 'Loren Ipsum dolor', selected: false},
    {id: 4, title: 'Loren Ipsum dolor', selected: false}
  ]

  type IDataTable = {
    id: number,
    title: string,
    selected: boolean
  }

  const [data, setSelected] = React.useState<IDataTable[]>(dataTable);

  const handleSelect = (event: React.MouseEvent<unknown>, item: IDataTable) => {
    let auxTable: IDataTable[] = [];

    auxTable = data.map(auxItem => {
      if(auxItem.id === item.id)
        auxItem.selected = !auxItem.selected

      return auxItem;
    })

    setSelected(auxTable)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    let auxTable: IDataTable[] = [];

    auxTable = data.map(auxItem => {
      auxItem.selected = event.target.checked
      return auxItem
    })

    setSelected(auxTable)
  };

  const handleIndeterminate = (data: IDataTable[]) => {
    const numSelected = data.filter(item => item.selected).length

    return numSelected > 0 && numSelected < data.length
  }

  const handleChecked = (data: IDataTable[]) => data.every(item => item.selected)
  
  return (
      <TableContainer>
        <Table 
        dividers={dividersOption}
        striped={stripedOption}
        rounded={roundedOption}
        aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="center">
              <Checkbox 
                color="primary"
                onChange={handleSelectAllClick}
                checked={handleChecked(data)}
                indeterminate={handleIndeterminate(data)}
                inputProps={{ 'aria-label': 'Checkbox Header' }}
              />
            </TableCell>
            <TableCell align={selectAlignOption}>Lorem Ipsum dolor</TableCell>
            <TableCell align={selectAlignOption}>Lorem Ipsum dolor</TableCell>
            <TableCell align={selectAlignOption}>Lorem Ipsum dolor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => {
            return (
              <TableRow
                key={item.id} 
                selected={item.selected}
                onClick={(ev) => handleSelect(ev, item)}
              >
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
            )
          })}
        </TableBody>
      </Table>
      </TableContainer>
  )
};

