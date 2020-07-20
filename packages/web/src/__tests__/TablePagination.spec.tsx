import * as React from "react";
import * as renderer from "react-test-renderer";

import {
  Table,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
} from "..";

describe("TablePagination component", () => {
  describe("rendering", () => {
    test("should match to snapshot - TablePagination component", () => {

      const ROWS_PER_PAGE_DEFAULT = 5;
      const ROWS_PER_PAGE_OPTION_10 = 10;
      const ROWS_PER_PAGE_OPTION_25 = 25;
      const ROWS_PER_PAGE_OPTION_ALL = -1;

      const wrapper = renderer.create(
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

      expect(wrapper.toJSON()).toMatchSnapshot("TablePagination component");
    });
  });
});
