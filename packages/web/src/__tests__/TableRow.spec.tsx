import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
} from '..';

describe('TableRow component', () => {
    describe('rendering variants', () => {

        test('should match to snapshot - standard TableRow', () => {
            const component = mount(
                <TableContainer>
                    <Table dividers={true}>
                        <TableHead>
                            <TableRow selected>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
            expect(component).matchSnapshot(
                'TableComponent with dividers'
            );
        });

        test('should match to snapshot - TableRow with selected on', () => {
            const component = mount(
                <TableContainer>
                    <Table dividers={true}>
                        <TableHead>
                            <TableRow selected={true}>
                                <TableCell></TableCell>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
            expect(component).matchSnapshot(
                'TableComponent with dividers'
            );
        });
    });
});