import * as React from "react";
import * as renderer from "react-test-renderer";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "..";

describe("Table component", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - standard TableComponent", () => {
      const component = renderer.create(
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

      expect(component.toJSON()).toMatchSnapshot("TableComponent standard");
    });

    test("should match to snapshot - with rounded applied", () => {
      const component = renderer.create(
        <TableContainer>
          <Table rounded>
            <TableHead>
              <TableRow>
                <TableCell>Test header cell</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>,
      );

      expect(component.toJSON()).toMatchSnapshot(
        "TableComponent with rounded borders",
      );
    });

    test("should match to snapshot - with striped off", () => {
      const component = renderer.create(
        <TableContainer>
          <Table striped={false}>
            <TableHead>
              <TableRow>
                <TableCell>Test header cell</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>,
      );

      expect(component.toJSON()).toMatchSnapshot(
        "TableComponent with stripes off",
      );
    });

    test("should match to snapshot - with dividers off", () => {
      const component = renderer.create(
        <TableContainer>
          <Table dividers={false}>
            <TableHead>
              <TableRow>
                <TableCell>Test header cell</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>,
      );

      expect(component.toJSON()).toMatchSnapshot(
        "TableComponent with dividers off",
      );
    });

    test("should match to snapshot - with rounded on and dividers off", () => {
      const component = renderer.create(
        <TableContainer>
          <Table rounded dividers={false}>
            <TableHead>
              <TableRow>
                <TableCell>Test header cell</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>,
      );

      expect(component.toJSON()).toMatchSnapshot(
        "TableComponent with rounded on and dividers off",
      );
    });

    test("should match to snapshot - with striped on", () => {
      const component = renderer.create(
        <TableContainer>
          <Table striped={true}>
            <TableHead>
              <TableRow>
                <TableCell>Test header cell</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>,
      );

      expect(component.toJSON()).toMatchSnapshot(
        "TableComponent with striped on",
      );
    });

    test("should match to snapshot - with dividers on", () => {
      const component = renderer.create(
        <TableContainer>
          <Table dividers={true}>
            <TableHead>
              <TableRow>
                <TableCell>Test header cell</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>,
      );

      expect(component.toJSON()).toMatchSnapshot(
        "TableComponent with dividers on",
      );
    });

    test("should match to snapshot - with rounded off", () => {
      const component = renderer.create(
        <TableContainer>
          <Table rounded={false}>
            <TableHead>
              <TableRow>
                <TableCell>Test header cell</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>,
      );

      expect(component.toJSON()).toMatchSnapshot(
        "TableComponent with rounded off",
      );
    });
  });
});
