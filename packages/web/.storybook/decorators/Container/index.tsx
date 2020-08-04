import * as React from "react";
import PropTypes from "prop-types";
import { Container as MaterialContainer } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import {tokens} from "@naturacosmeticos/natds-styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(createStyles(() => ({
  root: {
    paddingTop: tokens.spacing.spacingStandard
  }
})))

const Container = ({children} : {children: NonNullable<React.ReactNode>}) => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <MaterialContainer className={classes["root"]} maxWidth={false}>
        {children}
      </MaterialContainer>
    </React.Fragment>
  );
};

Container.displayName = "MaterialContainer";

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container;
