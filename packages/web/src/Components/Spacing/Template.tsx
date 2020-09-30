/* eslint-disable dot-notation */
import { Story } from "@storybook/react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import * as React from "react";
import { ISpacingProps } from "./Spacing.props";
import { IThemeWeb } from "../../Themes";
import Spacing from "./Spacing";
import { Typography } from "../Typography";

export const Template : Story<ISpacingProps> = (args) => {

  const useStyles = makeStyles((theme: IThemeWeb) => createStyles({
    inner: {
      backgroundColor: theme.palette && theme.palette.background ? theme.palette.background.paper : "",
      color: theme.palette && theme.palette.background ? theme.palette.background.paperContrastText : "",
      display: "flex",
    },
    root: {
      backgroundColor: "#FF00FF1A",
      display: "flex",
    },
    outer: {
      backgroundColor: "#FF00FF1A",
      display: "flex",
      width: "fit-content",
    },
  }), { name: "SpacingDemo" });

  const classes = useStyles();

  return <div className={classes["outer"]}>
    <Spacing className={classes["root"]} {...args}>
      <Typography className={classes["inner"]}>{args.children || "Spacing content"}</Typography>
    </Spacing>
  </div>;

};

export default Template;
