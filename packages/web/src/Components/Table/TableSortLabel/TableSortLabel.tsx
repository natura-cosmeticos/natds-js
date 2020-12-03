import * as React from "react";
import { IconName } from "@naturacosmeticos/natds-icons";
import MaterialTableSortLabel from "@material-ui/core/TableSortLabel";
import { ITableSortLabelProps } from "./TableSortLabel.props";
import { Icon } from "../../Icon";

export const TableSortLabel = React.forwardRef<HTMLSpanElement, ITableSortLabelProps>(
  (props: ITableSortLabelProps, ref) => {
    const {
      active, direction, IconComponent, ...otherProps
    } = props;

    const DefaultIconComponent = () => {
      let defaultIconName = "outlined-action-order" as IconName;

      if (active && direction === "desc") {
        defaultIconName = "outlined-navigation-directionbottom";
      }

      if (active && direction === "asc") {
        defaultIconName = "outlined-navigation-directiontop";
      }

      return <Icon name={defaultIconName} size={"micro"} />;
    };

    return <MaterialTableSortLabel
      active={active}
      direction={direction}
      IconComponent={IconComponent || DefaultIconComponent}
      {...otherProps}
      ref={ref} />;
  },
);
TableSortLabel.displayName = "TableSortLabel";
export default TableSortLabel;
