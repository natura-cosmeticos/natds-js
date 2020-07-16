import React from 'react';
import * as renderer from 'react-test-renderer';


import {
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableHead,
} from '..';

describe('TableHead component', () => {
    describe('rendering', () => {
        test('should match to snapshot - TableHead component', () => {
            const component = renderer.create(
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
            expect(component.toJSON).toMatchSnapshot('TableHead component');
        });
    });
});