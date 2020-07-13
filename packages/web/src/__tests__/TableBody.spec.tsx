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

describe('TableBody component', () => {
    describe('rendering', () => {
        test('should match to snapshot - standard TableBodyComponent', () => {
            const component = mount(
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>TableBody
                </TableContainer>
            );
            expect(component).matchSnapshot('TableBodyComponent standard');
        });
    });
});