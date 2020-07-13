import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

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
            const component = mount(
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
            expect(component).matchSnapshot('TableHead component');
        });
    });
});