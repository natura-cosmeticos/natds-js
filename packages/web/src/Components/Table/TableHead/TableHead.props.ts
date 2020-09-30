import { TableHeadProps } from "@material-ui/core/TableHead";

export interface ITableHeadProps extends TableHeadProps {
  children: TableHeadProps["children"]
}
