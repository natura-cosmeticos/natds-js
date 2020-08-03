import * as React from "react";
import { Container as MaterialContainer } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import {tokens} from "@naturacosmeticos/natds-styles";

const useStyles = makeStyles(createStyles(() => ({
  root: {
    paddingTop: tokens.spacing.spacingStandard
  }
})))

const Container = (storyFn: any) => {

  const classes = useStyles();

  return (
    <MaterialContainer className={classes["root"]} maxWidth={false}>
      {storyFn()}
    </MaterialContainer>
  );
};

export default Container;
