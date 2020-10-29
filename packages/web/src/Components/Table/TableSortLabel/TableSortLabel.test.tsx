import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { TableContainer } from "../TableContainer";
import Table from "../Table";
import { TableHead } from "../TableHead";
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";
import TableSortLabel from "./TableSortLabel";
import { Icon } from "../../Icon";
import { ITableSortLabelProps } from "./TableSortLabel.props";

const Template = (props: ITableSortLabelProps) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">
            <TableSortLabel {...props} />
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  </TableContainer>
);

describe("TableSortLabel component", () => {
  describe("when active", () => {

    describe("and direction is ascending", () => {
      it("should match snapshot", () => {
        const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
          <Template active={true} direction={"asc"} />,
        );

        expect(testRenderer).toMatchSnapshot();
      });
    });

    describe("and direction is descending", () => {
      it("should match snapshot", () => {
        const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
          <Template active={true} direction={"desc"} />,
        );

        expect(testRenderer).toMatchSnapshot();
      });
    });

    describe("and with icon", () => {
      it("should match snapshot", () => {
        const testRenderer = TestRenderer.create(
          <Template
            active={true}
            IconComponent={() => <Icon name="outlined-navigation-directionbottom" size="small" />}
            onClick={() => "click"}
          >
            TableSortLabel test
          </Template>,
        );

        expect(testRenderer).toMatchSnapshot("TableSortLabel active with Icon");
      });
    });

  });

  describe("when inactive and without icon", () => {
    it("should match snapshot", () => {
      const testRenderer = TestRenderer.create(
        <Template
          active={false}
          onClick={() => "click"}
        >
          TableSortLabel test
        </Template>,
      );

      expect(testRenderer).toMatchSnapshot("TableSortLabel active with Icon");
    });
  });

});
