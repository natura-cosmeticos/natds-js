import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import {
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
} from '..';

describe('TableCell component', () => {
    describe('rendering', () => {
        test('should match to snapshot - standard TableCellComponent', () => {
            const component = mount(
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            );
            expect(component).matchSnapshot('TableCellComponent standard');
        });
    });
});