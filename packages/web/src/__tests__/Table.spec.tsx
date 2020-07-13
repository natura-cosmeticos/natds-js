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
                    <Table rounded>
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

        test('should match to snapshot - with striped off', () => {
            const component = mount(
                <TableContainer>
                    <Table striped={false}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
            expect(component).matchSnapshot(
                'TableComponent with stripes off'
            );
        });

        test('should match to snapshot - with dividers off', () => {
            const component = mount(
                <TableContainer>
                    <Table dividers={false}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
            expect(component).matchSnapshot(
                'TableComponent with dividers off'
            );
        });

        test('should match to snapshot - with rounded on and dividers off', () => {
            const component = mount(
                <TableContainer>
                    <Table rounded dividers={false}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Lorem Ipsum dolor</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
            expect(component).matchSnapshot(
                'TableComponent with rounded on and dividers off'
            );
        });
    });
});