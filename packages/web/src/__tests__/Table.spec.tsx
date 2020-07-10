import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Checkbox
} from '..';
import { TableBody } from '@material-ui/core';

describe('Table component', () => {
    describe('rendering variants', () => {
        test('should match to snapshot - standard TableComponent', () => {
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
            expect(component).matchSnapshot('TableComponent standard');
        });

        test('should match to snapshot - with rounded applied', () => {
            const component = mount(
                <TableContainer>
                    <Table rounded={true}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
            expect(component).matchSnapshot(
                'TableComponent with rounded borders'
            );
        });

        test('should match to snapshot - with stripped applied', () => {
            const component = mount(
                <TableContainer>
                    <Table stripped={true}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
            expect(component).matchSnapshot(
                'TableComponent with stripes'
            );
        });

        test('should match to snapshot - with dividers applied', () => {
            const component = mount(
                <TableContainer>
                    <Table dividers={true}>
                        <TableHead>
                            <TableRow>
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