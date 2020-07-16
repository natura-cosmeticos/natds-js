import React from 'react';
import * as renderer from 'react-test-renderer';

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
            const component = renderer.create(
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
            expect(component.toJSON()).toMatchSnapshot('TableBodyComponent standard');
        });
    });
});