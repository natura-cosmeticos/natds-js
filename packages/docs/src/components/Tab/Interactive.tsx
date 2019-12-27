import * as React from 'react';
import { AppBar, TabContainer, TabItem } from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';
import { boolean, select } from '@storybook/addon-knobs';

const appBarColor: any = {
  default: 'default',
  inherit: 'inherit',
  primary: 'primary',
  secondary: 'secondary',
};

const tabContainerTextColor: any = {
  inherit: 'inherit',
  primary: 'primary',
  secondary: 'secondary',
};

const tabContainerIndicatorColor: any = {
  secondary: 'secondary',
  primary: 'primary',
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Interactive = () => {
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
      <AppBar
        position="static"
        color={select('AppBar color', appBarColor, appBarColor.inherit)}
      >
        <TabContainer
          value={value}
          onChange={handleChange}
          textColor={select(
            'TabContainer textColor',
            tabContainerTextColor,
            tabContainerTextColor.inherit
          )}
          indicatorColor={select(
            'TabContainer indicatorColor',
            tabContainerIndicatorColor,
            tabContainerIndicatorColor.secondary
          )}
          centered={boolean('TabContainer centered', false)}
        >
          <TabItem
            label="Item One"
            {...a11yProps(0)}
            disabled={boolean('TabItem disabled', false)}
          />
          <TabItem
            label="Item Two"
            {...a11yProps(1)}
            disabled={boolean('TabItem disabled', false)}
          />
          <TabItem
            label="Item Three"
            {...a11yProps(2)}
            disabled={boolean('TabItem disabled', false)}
          />
        </TabContainer>
      </AppBar>
    </div>
  );
};
