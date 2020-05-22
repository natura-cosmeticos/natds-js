import * as React from "react";
import { TabContainer, TabItem, AppBar } from "@naturacosmeticos/natds-web";
import { useStyles } from "./styles";

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const WrappedTab = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className={classes.tabContainer}>
      <AppBar
        position="static"
        color={props.color}
      >
        <TabContainer
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor={props.indicatorColor}
          variant="fullWidth"
          scrollButtons="off"
          centered={false}
        >
          <TabItem
            label="Item one"
            {...a11yProps(0)}
          />
          <TabItem
            label="Item Two"
            {...a11yProps(1)}
          />
        </TabContainer>
      </AppBar>
    </div>
  );
};

export const WrappedTabs = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <WrappedTab color="default" indicatorColor="primary" />
      <WrappedTab color="default" indicatorColor="secondary" />
    </div>
  );
};
