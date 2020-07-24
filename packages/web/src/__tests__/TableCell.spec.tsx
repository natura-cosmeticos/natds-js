import React from "react";
import * as renderer from "react-test-renderer";

import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "..";

describe("TableCell component", () => {
  describe("rendering", () => {
    test("should match to snapshot - standard TableCellComponent", () => {
      const component = renderer.create(
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Test header cell</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>,
      );

      expect(component.toJSON()).toMatchSnapshot("TableCellComponent standard");
    });
  });
});
