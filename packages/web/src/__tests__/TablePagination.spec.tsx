import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {
  Table,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
} from '..';

describe('TablePagination component', () => {
    describe('rendering', () => {
        test('should match to snapshot - TablePagination component', () => {
          const wrapper = renderer.create(
            <TableContainer>
              <Table>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      count={0}
                      onChangePage={() => 'click'}
                      page={0}
                      rowsPerPage={5}
                      rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
          </TableContainer>
          );
          expect(wrapper.toJSON()).toMatchSnapshot('TablePagination component');
        });
    });
});
