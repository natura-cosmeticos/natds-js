import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { TableContainer } from "../TableContainer";
import { Table } from "../Table";
import { TableHead } from "./TableHead";
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";

describe("TableHead component", () => {
  describe("rendering", () => {
    test("should match to snapshot - TableHead component", () => {
      const component = TestRenderer.create(
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Test header cell</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>,
      );

      expect(component).toMatchSnapshot("TableHead component");
    });
  });
});
