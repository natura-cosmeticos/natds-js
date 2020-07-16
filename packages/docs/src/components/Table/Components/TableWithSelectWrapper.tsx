import * as React from 'react';
import {
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';


export const TableWithSelectWrapper = ({
    align,
    dividers,
    rounded,
    striped,
  }:{
    align?: 'center' | 'inherit' | 'justify' | 'left' | 'right' | undefined
    dividers?: boolean,
    rounded?: boolean,
    striped?: boolean,
  }) => {
    const useStyles = makeStyles(theme => ({
      root: {
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
        width: 'auto',
      }
    }));
    const classes = useStyles();
    
    const dataTable = [
      {id: 1, title: 'Cell', selected: false},
      {id: 2, title: 'Cell', selected: false},
      {id: 3, title: 'Cell', selected: false},
      {id: 4, title: 'Cell', selected: false}
    ];
  
    type IDataTable = {
      id: number,
      selected: boolean,
      title: string,
    };
  
    const [dataState, setSelected] = React.useState<IDataTable[]>(dataTable);
  
    const handleSelect = (event: React.MouseEvent<unknown>, item: IDataTable) => {
      let auxiliaryTable: IDataTable[] = [];
  
      auxiliaryTable = dataState.map(auxItem => {
        if(auxItem.id === item.id){
          auxItem.selected = !auxItem.selected;
        }

        return auxItem;
      });
  
      setSelected(auxiliaryTable);
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
      const selectedRows = data.filter(item => item.selected).length;
  
      return selectedRows > 0 && selectedRows < data.length;
    };
  
    const handleChecked = (data: IDataTable[]) => data.every(item => item.selected);
    
    return (
      <div className={classes.root}>
        <Table
          aria-label="simple table"
          dividers={dividers}
          striped={striped}
          rounded={rounded}>
          <TableHead>
            <TableRow >
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
            {dataState.map(item => {
              return (
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
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  };