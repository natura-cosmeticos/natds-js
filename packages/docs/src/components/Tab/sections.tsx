import * as React from 'react';
import { AppBar, TabContainer, TabItem } from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AppBarWrapper = ({
  textColor,
  indicatorColor,
}: {
  textColor?: any;
  indicatorColor?: any;
}) => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <TabContainer
          value={value}
          onChange={handleChange}
          textColor={textColor}
          indicatorColor={indicatorColor}
        >
          <TabItem label="Item One" {...a11yProps(0)} />
          <TabItem label="Item Two" {...a11yProps(1)} />
          <TabItem label="Item Three" {...a11yProps(2)} />
        </TabContainer>
      </AppBar>
    </div>
  );
};

export const tabContainerTextColor = [
  {
    title: 'inherit',
    component: <AppBarWrapper textColor="inherit" />,
  },
  {
    title: 'primary',
    component: <AppBarWrapper textColor="primary" />,
  },
  {
    title: 'secondary',
    component: <AppBarWrapper textColor="secondary" />,
  },
];

export const tabContainerIndicatorColor = [
  {
    title: 'secondary',
    component: <AppBarWrapper indicatorColor="secondary" />,
  },
  {
    title: 'primary',
    component: <AppBarWrapper indicatorColor="primary" />,
  },
];
