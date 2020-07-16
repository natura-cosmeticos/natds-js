import * as React from 'react';
import {
    Icon,
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@naturacosmeticos/natds-web';

export const HeaderWrapper = ({
    active,
    direction,
    IconComponent,
  }:{
    active?: boolean,
    direction?: 'asc' | 'desc',
    IconComponent?: any
  }) => {
  
    const defaultComponent = (componentDirection?: 'asc' | 'desc', componentActive?: boolean) => {
      if(componentActive && componentDirection === 'desc'){
        return ((props: any) => <Icon {...props} name="outlined-navigation-directionbottom" size="small" />);
      }
      if(componentActive && componentDirection === 'asc'){
        return ((props: any) => <Icon {...props} name="outlined-navigation-directiontop" size="small" />);
      }
  
      return ((props: any) => <Icon {...props} name="outlined-action-order" size="small" />);
    };
  
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <TableSortLabel
                  active={active}
                  onClick={() => { }}
                  IconComponent={IconComponent ? IconComponent : defaultComponent(direction, active)}
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