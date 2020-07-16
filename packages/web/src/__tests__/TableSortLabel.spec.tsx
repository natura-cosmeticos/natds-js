import React from 'react';
import * as renderer from 'react-test-renderer';

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
      const component = renderer.create(
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <TableSortLabel
                    active
                    IconComponent={() => <Icon name="outlined-navigation-directionbottom" size="small" />}
                    onClick={() => 'click'}
                  >
                    TableSortLabel Test
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      );
      expect(component.toJSON()).toMatchSnapshot('TableSortlabel active with Icon');
    });

    test('should match to snapshot - TableSortlabel inactive without Icon', () => {
      const component = renderer.create(
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
      expect(component.toJSON()).toMatchSnapshot('TableSortlabel active with Icon');
    });
  });
});