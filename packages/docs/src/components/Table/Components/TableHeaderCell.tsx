import * as React from 'react';
import {
    Checkbox,
    Table,
    TableCell,
    TableHead,
    TableRow,
} from '@naturacosmeticos/natds-web';

export const TableHeaderCell = ({
    indeterminate
  }:{
    indeterminate?: boolean
  }) => {
    return(
        <Table>
          <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Checkbox color="primary" indeterminate={indeterminate}/>
                </TableCell>
              </TableRow>
            </TableHead>
        </Table>
    );
  };
  