import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import {
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableFooter,
} from '..';

describe('TableFooter component', () => {
    describe('rendering', () => {
        test('should match to snapshot - TableFooter component', () => {
            const component = mount(
                <TableContainer>
                    <Table>
                        <TableFooter>
                            <TableRow>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            );
            expect(component).matchSnapshot('TableFooter component');
        });
    });
});