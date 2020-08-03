import * as React from "react";

import Icon from "../../Icon";
import { Table } from "../Table";
import { TableCell } from "../TableCell";
import { TableHead } from "../TableHead";
import { TableRow } from "../TableRow";
import { TableSortLabel } from "../TableSortLabel";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const HeaderWrapper = ({
  active,
  direction,
  IconComponent,
}:{
    active?: boolean,
    direction?: "asc" | "desc",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    IconComponent?: any
  }) => {

  const DefaultIcon = ({componentActive, componentDirection, ...props}: { componentActive?: boolean, componentDirection ?: "asc" | "desc" }) => {
    let iconName = "outlined-action-order";

    if (componentActive && componentDirection === "desc") {
      iconName = "outlined-navigation-directionbottom";
    }

    if (componentActive && componentDirection === "asc") {
      iconName = "outlined-navigation-directiontop";
    }

    return <Icon name={iconName} size="small" {...props} />;
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <TableSortLabel
                active={active}
                onClick={() => { Function.prototype(); }}
                IconComponent={IconComponent || DefaultIcon({componentActive: active, componentDirection: direction})}
              >
                  Cell with Sort Icon
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </div>
  );
};
