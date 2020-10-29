import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { TableContainer } from "./TableContainer";
import { Table } from "./Table";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";

describe("Table component", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - standard TableComponent", () => {
      const component = TestRenderer.create(<TableContainer>
        <Table>
          <TableHead>
            <TableRow><TableCell>Test header cell</TableCell></TableRow>
          </TableHead>
        </Table>
      </TableContainer>);

      expect(component).toMatchSnapshot();
    });

    test("should match to snapshot - with rounded applied", () => {
      const component = TestRenderer.create(<TableContainer>
        <Table rounded>
          <TableHead>
            <TableRow><TableCell>Test header cell</TableCell></TableRow>
          </TableHead>
        </Table>
      </TableContainer>);

      expect(component).toMatchSnapshot();
    });

    test("should match to snapshot - with striped off", () => {
      const component = TestRenderer.create(<TableContainer>
        <Table striped={false}>
          <TableHead>
            <TableRow><TableCell>Test header cell</TableCell></TableRow>
          </TableHead>
        </Table>
      </TableContainer>);

      expect(component).toMatchSnapshot();
    });

    test("should match to snapshot - with dividers off", () => {
      const component = TestRenderer.create(<TableContainer>
        <Table dividers={false}>
          <TableHead>
            <TableRow><TableCell>Test header cell</TableCell></TableRow>
          </TableHead>
        </Table>
      </TableContainer>);

      expect(component).toMatchSnapshot();
    });

    test("should match to snapshot - with rounded on and dividers off", () => {
      const component = TestRenderer.create(<TableContainer>
        <Table rounded dividers={false}>
          <TableHead>
            <TableRow><TableCell>Test header cell</TableCell></TableRow>
          </TableHead>
        </Table>
      </TableContainer>);

      expect(component).toMatchSnapshot();
    });

    test("should match to snapshot - with striped on", () => {
      const component = TestRenderer.create(<TableContainer>
        <Table striped={true}>
          <TableHead>
            <TableRow><TableCell>Test header cell</TableCell></TableRow>
          </TableHead>
        </Table>
      </TableContainer>);

      expect(component).toMatchSnapshot();
    });

    test("should match to snapshot - with dividers on", () => {
      const component = TestRenderer.create(<TableContainer>
        <Table dividers={true}>
          <TableHead>
            <TableRow><TableCell>Test header cell</TableCell></TableRow>
          </TableHead>
        </Table>
      </TableContainer>);

      expect(component).toMatchSnapshot();
    });

    test("should match to snapshot - with rounded off", () => {
      const component = TestRenderer.create(<TableContainer>
        <Table rounded={false}>
          <TableHead>
            <TableRow><TableCell>Test header cell</TableCell></TableRow>
          </TableHead>
        </Table>
      </TableContainer>);

      expect(component).toMatchSnapshot();
    });
  });
});
