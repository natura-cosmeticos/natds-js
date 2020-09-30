import { TableProps as MaterialTableProps } from "@material-ui/core/Table/Table";

export interface ITableProps extends MaterialTableProps {

  /**
   * With dividers
   *
   * @default false
   * @optional
   */
  dividers?: boolean;

  /**
   * With rounded borders
   *
   * @default false
   * @optional
   */
  rounded?: boolean;

  /**
   * With stripes
   *
   * @default false
   * @optional
   */
  striped?: boolean;
}
