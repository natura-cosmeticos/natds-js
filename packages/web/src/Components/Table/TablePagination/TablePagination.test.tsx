import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { TableContainer } from "../TableContainer";
import { Table } from "../Table";
import { TableRow } from "../TableRow";
import { TableFooter } from "../TableFooter";
import { TablePagination } from "./TablePagination";

describe("TablePagination component", () => {
  it("should match snapshot", () => {

    const ROWS_PER_PAGE_DEFAULT = 5;
    const ROWS_PER_PAGE_OPTION_10 = 10;
    const ROWS_PER_PAGE_OPTION_25 = 25;
    const ROWS_PER_PAGE_OPTION_ALL = -1;

    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(
      <TableContainer>
        <Table>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={0}
                onChangePage={() => "click"}
                page={0}
                rowsPerPage={ROWS_PER_PAGE_DEFAULT}
                rowsPerPageOptions={[ROWS_PER_PAGE_DEFAULT,
                  ROWS_PER_PAGE_OPTION_10,
                  ROWS_PER_PAGE_OPTION_25,
                  { label: "All", value: ROWS_PER_PAGE_OPTION_ALL }]}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>,
    );

    expect(testRenderer).toMatchSnapshot("TablePagination component");
  });
});
