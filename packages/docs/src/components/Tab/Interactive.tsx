import * as React from 'react';
import {
  AppBar,
  TabContainer,
  TabItem,
  Icon,
} from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';
import { boolean, select, number } from '@storybook/addon-knobs';

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

const tabContainerVariant: any = {
  standard: 'standard',
  scrollable: 'scrollable',
  fullWidth: 'fullWidth',
};

const tabContainerScrollButtons: any = {
  auto: 'auto',
  desktop: 'desktop',
  on: 'on',
  off: 'off',
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
      maxWidth: number('Container maxWidth', 640),
    },
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const tabItemWrapped = boolean('TabItem wrapped', false);
  const tabItemDisabled = boolean('TabItem disabled', false);
  const tabItemIcon = boolean('TabItem icon', false);

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
          variant={select(
            'TabContainer variant',
            tabContainerVariant,
            tabContainerVariant.standard
          )}
          scrollButtons={select(
            'TabContainer scrollButtons',
            tabContainerScrollButtons,
            tabContainerScrollButtons.auto
          )}
          centered={boolean('TabContainer centered', false)}
        >
          <TabItem
            icon={
              tabItemIcon ? (
                <Icon name="outlined-action-love" size="small" />
              ) : (
                ''
              )
            }
            label={`Item One ${
              tabItemWrapped ? 'With Longest Text of Nonfiction' : ''
            }`}
            wrapped={tabItemWrapped}
            {...a11yProps(0)}
          />
          <TabItem
            icon={
              tabItemIcon ? (
                <Icon name="outlined-product-outlet" size="small" />
              ) : (
                ''
              )
            }
            label="Item Two"
            {...a11yProps(1)}
            disabled={tabItemDisabled}
          />
          <TabItem
            icon={
              tabItemIcon ? (
                <Icon name="outlined-product-brandsproduct" size="small" />
              ) : (
                ''
              )
            }
            label="Item Three"
            {...a11yProps(2)}
          />
          <TabItem label="Item Four" {...a11yProps(2)} />
        </TabContainer>
      </AppBar>
    </div>
  );
};
