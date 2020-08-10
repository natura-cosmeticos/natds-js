import * as React from "react";
import PropTypes from "prop-types";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {tokens} from "@naturacosmeticos/natds-styles";
import ScopedCssBaseline from "../../../src/Components/ScopedCssBaseline";
import { Container as InnerContainer } from "../../../src/Components/Container";

const useStyles = makeStyles(createStyles(() => ({
  root: {
    paddingTop: tokens.spacing.spacingStandard
  }
})))

const Container = ({children} : {children: NonNullable<React.ReactNode>}) => {

  const classes = useStyles();

  return (
    <ScopedCssBaseline>
      <InnerContainer classes={classes} maxWidth={false}>
        {children}
      </InnerContainer>
    </ScopedCssBaseline>
  );
};

Container.displayName = "MaterialContainer";

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container;
