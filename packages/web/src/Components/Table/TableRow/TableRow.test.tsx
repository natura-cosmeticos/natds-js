import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { TableContainer } from "../TableContainer";
import { Table } from "../Table";
import { TableHead } from "../TableHead";
import { TableRow } from "./TableRow";
import { TableCell } from "../TableCell";

describe("TableRow component", () => {
  describe("rendering variants", () => {

    test("should match to snapshot - standard TableRow", () => {
      const component = TestRenderer.create(
        <TableContainer>
          <Table dividers={true}>
            <TableHead>
              <TableRow selected>
                <TableCell>Test table cell text</TableCell>
                <TableCell>Test table cell text</TableCell>
                <TableCell>Test table cell text</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>,
      );

      expect(component).toMatchSnapshot(
        "TableComponent with dividers",
      );
    });

    test("should match to snapshot - TableRow with selected on", () => {
      const component = TestRenderer.create(
        <TableContainer>
          <Table dividers={true}>
            <TableHead>
              <TableRow selected={true}>
                <TableCell>Test table cell text</TableCell>
                <TableCell>Test table cell text</TableCell>
                <TableCell>Test table cell text</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>,
      );

      expect(component).toMatchSnapshot(
        "TableComponent with dividers",
      );
    });
  });
});
