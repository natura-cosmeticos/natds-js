import * as React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { useStyles } from "./styles";

const AppBar = React.lazy(() => import("@naturacosmeticos/natds-web/dist/Components/AppBar"));
const Badge = React.lazy(() => import("@naturacosmeticos/natds-web/dist/Components/Badge"));
const IconButton = React.lazy(() => import("@naturacosmeticos/natds-web/dist/Components/IconButton"));
const Icon = React.lazy(() => import("@naturacosmeticos/natds-web/dist/Components/Icon"));
const Toolbar = React.lazy(() => import("@naturacosmeticos/natds-web/dist/Components/Toolbar"));
const Typography = React.lazy(() => import("@naturacosmeticos/natds-web/dist/Components/Typography"));

type colors = "primary" | "secondary" | "default" | "inherit";

export const WrappedAppBar = ({ color }: { color: colors }) => {
  const classes = useStyles();

  return (
    <div className={classes.appBar}>
      <React.Suspense fallback={<Skeleton variant={"rect"} />}>
        <AppBar position="relative" color={color}>
          <React.Suspense fallback={<Skeleton variant={"rect"} />}>
            <Toolbar>
              <React.Suspense fallback={<Skeleton variant={"rect"} />}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <React.Suspense fallback={<Skeleton variant={"circle"} />}>
                    <Icon name="filled-navigation-menu" size="tiny" />
                  </React.Suspense>
                </IconButton>
              </React.Suspense>
              <React.Suspense fallback={<Skeleton variant="text" />}>
                <Typography variant="h6" className={classes.title}>
              AppBar
                </Typography>
              </React.Suspense>
              <React.Suspense fallback={<Skeleton variant={"rect"} />}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <React.Suspense fallback={<Skeleton variant={"circle"} />}>
                    <Icon name="outlined-action-search" size="tiny" />
                  </React.Suspense>
                </IconButton>
              </React.Suspense>
              <React.Suspense fallback={<Skeleton variant={"rect"} />}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <Badge color="error" badgeContent="1">
                    <React.Suspense fallback={<Skeleton variant={"circle"} />}>
                      <Icon name="outlined-action-filter" size="tiny" />
                    </React.Suspense>
                  </Badge>
                </IconButton>
              </React.Suspense>
              <React.Suspense fallback={<Skeleton variant={"rect"} />}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <React.Suspense fallback={<Skeleton variant={"circle"} />}>
                    <Icon name="outlined-social-myprofile" size="tiny" />
                  </React.Suspense>
                </IconButton>
              </React.Suspense>
            </Toolbar>
          </React.Suspense>
        </AppBar>
      </React.Suspense>
    </div>
  );
};

export const WrappedAppBars = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <WrappedAppBar color="default" />
      <WrappedAppBar color="primary" />
      <WrappedAppBar color="secondary" />
    </div>
  );
};
