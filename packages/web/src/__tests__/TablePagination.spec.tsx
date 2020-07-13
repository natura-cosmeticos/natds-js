import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import {
    TableContainer,
    Table,
    TableRow,
    TableFooter,
    TablePagination,
} from '..';

describe('TablePagination component', () => {
    describe('rendering', () => {
        test('should match to snapshot - TablePagination component', () => {
            const component = mount(
                <TableContainer>
                    <Table>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    count={0}
                                    page={0}
                                    rowsPerPage={5}
                                    onChangePage={() => 'click'}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            );
            expect(component).matchSnapshot('TablePagination component');
        });
    });
});