import * as React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import {tokens} from "@naturacosmeticos/natds-styles";

// @todo get from Design System theme

const useStyles = makeStyles(createStyles((theme) => ({
  root: {
    paddingTop: tokens.spacing.spacingStandard
  }
})))

const container = (storyFn: any) => {

  const classes = useStyles();

  return (
    <Container className={classes["root"]} maxWidth={false}>
      {storyFn()}
    </Container>
  );
};

const playgroundContainer = (storyFn: any) => {



}

export default container;
