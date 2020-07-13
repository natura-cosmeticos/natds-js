import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import {
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableSortLabel,
    Icon
} from '..';

describe('TableSortLabel component', () => {
    describe('rendering', () => {
        test('should match to snapshot - TableSortlabel active with Icon', () => {
            const component = mount(
                <TableContainer>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <TableSortLabel
                                    active
                                    onClick={() => 'click'}
                                    IconComponent={() => <Icon name="outlined-navigation-directionbottom" size="small"  />}
                                >
                                    Lorem Ipsum dolor
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
            expect(component).matchSnapshot('TableSortlabel active with Icon');
        });

        test('should match to snapshot - TableSortlabel deactive without Icon', () => {
            const component = mount(
                <TableContainer>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <TableSortLabel
                                    active={false}
                                    onClick={() => 'click'}
                                >
                                    Lorem Ipsum dolor
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
            expect(component).matchSnapshot('TableSortlabel active with Icon');
        });
    });
});