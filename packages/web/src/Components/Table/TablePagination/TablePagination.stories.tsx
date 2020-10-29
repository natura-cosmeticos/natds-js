import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { TablePagination } from "./TablePagination";
import { ITablePaginationProps } from "./TablePagination.props";
import { exampleDataTable } from "../__fixtures__/exampleDataTable";
import { argTypes } from "./TablePagination.argTypes";

export default {
  argTypes,
  component: TablePagination,
  title: "Components/Table/Table Pagination",
} as Meta;

const Template : Story<ITablePaginationProps> = (args) => {

  const INITIAL_PAGE = 0;
  const HALF = 0.5;
  const INITIAL_ROWS_PER_PAGE = exampleDataTable.length * HALF;

  const [page, setPage] = React.useState<number>(INITIAL_PAGE);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(INITIAL_ROWS_PER_PAGE);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const radix = 10;

    setRowsPerPage(parseInt(event.target.value, radix));
  };

  return (<TablePagination
    count={args.count || exampleDataTable.length}
    onChangePage={handleChangePage}
    onChangeRowsPerPage={handleChangeRowsPerPage}
    page={args.page || page}
    // eslint-disable-next-line no-magic-numbers
    rowsPerPageOptions={args.rowsPerPageOptions || [INITIAL_ROWS_PER_PAGE, 10, 25, 50, 100]}
    rowsPerPage={args.rowsPerPage || rowsPerPage}
  />);

};

export const Playground = Template.bind({});
Playground.args = {};
