import { TableProps as MaterialTableProps } from "@material-ui/core/Table/Table";

export interface ITableProps extends MaterialTableProps {

  /**
   * Set dividers for `Table`.
   *
   * If `true`, `Table` will be rendered with dividers.
   *
   * @optional
   */
  dividers?: boolean;

  /**
   * Set rounded borders for `Table`.
   *
   * If `true`, `Table` will be rendered with rounded borders.
   *
   * @optional
   */
  rounded?: boolean;

  /**
   * Set stripes for `Table`.
   *
   * If `true`, `Table` will be rendered with stripes.
   *
   * @optional
   */
  striped?: boolean;
}
