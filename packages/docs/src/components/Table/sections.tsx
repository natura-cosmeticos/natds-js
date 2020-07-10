import * as React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
  Icon,
  Checkbox,
} from '@naturacosmeticos/natds-web';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { number, boolean } from '@storybook/addon-knobs';

const TableWithSelectWrapper = ({
  dividers,
  rounded,
  stripped,
  align,
}:{
  dividers?: boolean,
  rounded?: boolean,
  stripped?: boolean,
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined
}) => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      widatah: 'auto',
    }
  }));
  const classes = useStyles();
  
  const dataTable = [
    {id: 1, title: 'Loren Ipsum dolor', selected: false},
    {id: 2, title: 'Loren Ipsum dolor', selected: false},
    {id: 3, title: 'Loren Ipsum dolor', selected: false},
    {id: 4, title: 'Loren Ipsum dolor', selected: false}
  ]

  type IDataTable = {
    id: number,
    title: string,
    selected: boolean
  }

  const [data, setSelected] = React.useState<IDataTable[]>(dataTable);

  const handleSelect = (event: React.MouseEvent<unknown>, item: IDataTable) => {
    let auxTable: IDataTable[] = [];

    auxTable = data.map(auxItem => {
      if(auxItem.id === item.id)
        auxItem.selected = !auxItem.selected

      return auxItem;
    })

    setSelected(auxTable)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    let auxTable: IDataTable[] = [];

    auxTable = data.map(auxItem => {
      auxItem.selected = event.target.checked
      return auxItem
    })

    setSelected(auxTable)
  };

  const handleIndeterminate = (data: IDataTable[]) => {
    const numSelected = data.filter(item => item.selected).length

    return numSelected > 0 && numSelected < data.length
  }

  const handleChecked = (data: IDataTable[]) => data.every(item => item.selected)
  
  return (
    <div className={classes.root}>
      <Table 
        dividers={dividers}
        stripped={stripped}
        aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="center">
              <Checkbox 
                color="primary"
                onChange={handleSelectAllClick}
                checked={handleChecked(data)}
                indeterminate={handleIndeterminate(data)}
              />
            </TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => {
            return (
              <TableRow
                key={item.id} 
                selected={item.selected}
                onClick={(ev) => handleSelect(ev, item)}
              >
                <TableCell align="center">
                  <Checkbox 
                    color="primary"
                    checked={item.selected}
                    />
                </TableCell>
                <TableCell align={align}>{item.title}</TableCell>
                <TableCell align={align}>{item.title}</TableCell>
                <TableCell align={align}>{item.title}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

const TableHeaderCell = ({
  indeterminate
}:{
  indeterminate?: boolean
}) => {
  return(
    <div>
      <Table>
        <TableHead>
            <TableRow>
              <TableCell align="center">
                <Checkbox color="primary" indeterminate={indeterminate}/>
              </TableCell>
            </TableRow>
          </TableHead>
      </Table>
    </div>
  )
}

const HeaderWrapper = ({
  active,
  direction,
  IconComponent,
}:{
  active?: boolean,
  direction?: 'asc' | 'desc',
  IconComponent?: any
}) => {

  const defaultComponent = (direction?: 'asc' | 'desc', active?: boolean) => {
    if(active && direction === 'desc'){
      return ((props: any) => <Icon {...props} name="outlined-navigation-directionbottom" size="largex" />)
    }
    if(active && direction === 'asc'){
      return ((props: any) => <Icon {...props} name="outlined-navigation-directiontop" size="largex" />)
    }

    return ((props: any) => <Icon {...props} name="outlined-action-order" size="largex" />)
  }

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
                Lorem Ipsum dolor
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </div>
  )
}

const TableWrapper = ({
  dividers,
  stripped,
  align,
  rounded,
}: {
  dividers?: boolean,
  stripped?: boolean,
  rounded?: boolean,
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined,
}) => {

  return (
      <Table
        dividers={dividers}
        stripped={stripped}
        rounded={rounded}
      >
        <TableHead>
          <TableRow>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
            <TableCell align={align}>Lorem Ipsum dolor</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  );
};
 
export const tableContainerVariant = [
  {
    title: 'standard',
    component: <TableWrapper/>
  },
];

export const tableContainerAttribute = [
  {
    title: 'rounded: on',
    component: <TableWrapper rounded/>,
  },
  {
    title: 'dividers: none',
    component: <TableWrapper dividers={false}/>,
  },
  {
    title: 'stripped: none',
    component: <TableWrapper stripped={false}/>,
  },
  {
    title: 'Table Header Cell / Ordination desc',
    component: <HeaderWrapper active direction={'desc'}/>
  },
  {
    title: 'Table Header Cell / Ordination asc',
    component: <HeaderWrapper active direction={'asc'}/>
  },
  {
    title: 'Table Header Cell / Ordination order',
    component: <HeaderWrapper active/>
  },
  {
    title: 'Table Header Cell / Selection control',
    component: <TableHeaderCell/>
  },
  {
    title: 'Table Header Cell / Selection control',
    component: <TableHeaderCell/>
  },
  {
    title: 'Table Header Cell / Selection control indeterminate',
    component: <TableHeaderCell indeterminate/>
  },
  {
    title: 'Table Data Cell / Align: Left',
    component: <TableWrapper align={'left'} />
  },
  {
    title: 'Table Data Cell / Align: Center',
    component: <TableWrapper align={'center'}/>
  },
  {
    title: 'Table Data Cell / Align: Right',
    component: <TableWrapper align={'right'}/>,
  },
  {
    title: 'Row / Selected',
    component: <TableWithSelectWrapper align={'center'}/>
  },
];