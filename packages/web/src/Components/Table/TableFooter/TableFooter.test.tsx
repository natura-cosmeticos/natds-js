import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { TableContainer } from "../TableContainer";
import { Table } from "../Table";
import { TableFooter } from "./TableFooter";
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";

describe("TableFooter component", () => {
  describe("rendering", () => {
    test("should match to snapshot - TableFooter component", () => {
      const testRenderer = TestRenderer.create(
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

      expect(testRenderer).toMatchSnapshot();
    });
  });
});
