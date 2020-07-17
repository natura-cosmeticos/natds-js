import * as React from "react";
import {
  AppBar,
  TabContainer,
  TabItem,
  Icon
} from "@naturacosmeticos/natds-web";
import { makeStyles } from "@material-ui/core/styles";

const a11yProps = (index: any) => ({
  "id": `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`
});

const AppBarWrapper = ({
  variant,
  width,
  textColor,
  indicatorColor,
  centered,
  disabled,
  wrapped,
  icon,
  label = true
}: {
  variant?: any;
  width?: number;
  textColor?: any;
  indicatorColor?: any;
  centered?: boolean;
  disabled?: boolean;
  wrapped?: boolean;
  icon?: boolean;
  label?: boolean;
}) => {
  const useStyles = makeStyles((theme) => ({
    "root": {
      "flexGrow": 1,
      "backgroundColor": theme.palette.background.paper,
      "width": width || 640
    }
  }));

  const classes = useStyles();
  const [
    value,
    setValue
  ] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  const labelItemOne = wrapped
    ? "Item One With Longest Text of Nonfiction"
    : "Item One";

  // @todo fix(docs): TS2769 - No overload matches this call on TabContainer onChange
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <TabContainer
          value={value}
          // @ts-ignore
          onChange={handleChange}
          textColor={textColor}
          indicatorColor={indicatorColor}
          variant={variant}
          centered={centered}
        >
          <TabItem
            icon={icon ? <Icon name="outlined-action-love" size="small" /> : ""}
            label={label ? labelItemOne : ""}
            wrapped={wrapped}
            {...a11yProps(0)}
          />
          <TabItem
            icon={
              icon ? <Icon name="outlined-product-outlet" size="small" /> : ""
            }
            label={label ? "Item Two" : ""}
            disabled={disabled}
            {...a11yProps(1)}
          />
          <TabItem
            icon={
              icon
                ? <Icon name="outlined-product-brandsproduct" size="small" />
                : ""

            }
            label={label ? "Item Three" : ""}
            {...a11yProps(2)}
          />
          <TabItem
            icon={
              icon ? <Icon name="outlined-product-makeup" size="small" /> : ""
            }
            label={label ? "Item Four" : ""}
            {...a11yProps(3)}
          />
        </TabContainer>
      </AppBar>
    </div>
  );
};

export const tabContainerVariant = [
  {
    "title": "standard",
    "component": <AppBarWrapper variant="standard" />
  },
  {
    "title": "scrollable",
    "component": <AppBarWrapper variant="scrollable" width={600} />
  },
  {
    "title": "fullWidth",
    "component": <AppBarWrapper variant="fullWidth" width={1240} />
  }
];

export const tabContainerTextColor = [
  {
    "title": "inherit",
    "component": <AppBarWrapper textColor="inherit" />
  },
  {
    "title": "primary",
    "component": <AppBarWrapper textColor="primary" />
  },
  {
    "title": "secondary",
    "component": <AppBarWrapper textColor="secondary" />
  }
];

export const tabContainerIndicatorColor = [
  {
    "title": "secondary",
    "component": <AppBarWrapper indicatorColor="secondary" />
  },
  {
    "title": "primary",
    "component": <AppBarWrapper indicatorColor="primary" />
  }
];

export const tabContainerAttribute = [
  {
    "title": "centered",
    "component": <AppBarWrapper width={1240} centered={true} />
  }
];

export const tabItemAttribute = [
  {
    "title": "icon",
    "component": <AppBarWrapper icon={true} label={false} />
  },
  {
    "title": "icon with label",
    "component": <AppBarWrapper icon={true} />
  },
  {
    "title": "disabled",
    "component": <AppBarWrapper disabled={true} />
  },
  {
    "title": "wrapped",
    "component": <AppBarWrapper wrapped={true} width={800} />
  }
];
