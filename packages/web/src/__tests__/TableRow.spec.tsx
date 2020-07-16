import React from 'react';
import * as renderer from 'react-test-renderer';

import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '..';

describe('TableRow component', () => {
    describe('rendering variants', () => {

        test('should match to snapshot - standard TableRow', () => {
            const component = renderer.create(
                <TableContainer>
                    <Table dividers={true}>
                        <TableHead>
                            <TableRow selected>
                                <TableCell>Test table cell text</TableCell>
                                <TableCell>Test table cell text</TableCell>
                                <TableCell>Test table cell text</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
            expect(component.toJSON()).toMatchSnapshot(
                'TableComponent with dividers'
            );
        });

        test('should match to snapshot - TableRow with selected on', () => {
            const component = renderer.create(
                <TableContainer>
                    <Table dividers={true}>
                        <TableHead>
                            <TableRow selected={true}>
                                <TableCell>Test table cell text</TableCell>
                                <TableCell>Test table cell text</TableCell>
                                <TableCell>Test table cell text</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
            expect(component.toJSON()).toMatchSnapshot(
                'TableComponent with dividers'
            );
        });
    });
});