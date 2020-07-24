import React from "react";
import * as renderer from "react-test-renderer";

import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableFooter,
} from "..";

describe("TableFooter component", () => {
  describe("rendering", () => {
    test("should match to snapshot - TableFooter component", () => {
      const component = renderer.create(
        <TableContainer>
          <Table>
            <TableFooter>
              <TableRow>
                <TableCell>Test footer cell</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>,
      );

      expect(component.toJSON()).toMatchSnapshot("TableFooter component");
    });
  });
});
