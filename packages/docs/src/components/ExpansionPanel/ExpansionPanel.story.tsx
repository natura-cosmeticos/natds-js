import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";
import { boolean, number } from "@storybook/addon-knobs";
import {
  Button,
  Divider,
  ExpansionPanel,
  ExpansionPanelActions,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Icon,
  Typography,
} from "@naturacosmeticos/natds-web";
import ExpansionPanelDocs from "./ExpansionPanel.docs.mdx";

export default {
  title: "Components|ExpansionPanel",
  component: ExpansionPanel,
  decorators: [
    withJest(), withContainer,
  ],
  parameters: {
    jestImportPath: "web",
    jest: ["ExpansionPanel"],
    theme: {
      context: "web",
    },
    docs: {
      page: ExpansionPanelDocs,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "920px",
  },
  row: {
    flexFlow: "row wrap",
  },
  title: {
    flex: "2 1 0",
  },
  details: {
    flex: "3 1 0",
  },
  rowTitle: {
    marginBottom: "16px",
  },
}));

export const Interactive = () => {
  const classes = useStyles();
  const elevation = number("elevation", 0);
  const disableSpacing = boolean("disableSpacing", false);

  return (
    <div className={classes.root}>
      <ExpansionPanel elevation={elevation}>
        <ExpansionPanelSummary expandIcon={<Icon name="outlined-navigation-arrowbottom" size="small" />}>
          <Typography variant="subtitle1">Subtitle 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="subtitle1" color="textSecondary">Details text lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel elevation={elevation}>
        <ExpansionPanelSummary expandIcon={<Icon name="outlined-navigation-arrowbottom" size="small" />}>
          <Typography variant="subtitle1" className={classes.title}>Subtitle 1</Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.details}>Legend text lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="subtitle1" color="textSecondary">Details text lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel elevation={elevation}>
        <ExpansionPanelSummary expandIcon={<Icon name="outlined-navigation-arrowbottom" size="small" />}>
          <Typography variant="subtitle1" className={classes.title}>Subtitle 1</Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.details}>Legend text lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.column}>
          <Typography variant="subtitle1" color="textPrimary">Content text lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel elevation={elevation}>
        <ExpansionPanelSummary expandIcon={<Icon name="outlined-navigation-arrowbottom" size="small" />}>
          <div className={classes.row}>
            <Typography variant="subtitle1" className={classes.rowTitle}>Subtitle 1</Typography>
            <Typography variant="subtitle1" color="textSecondary">Legend text lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="subtitle1" color="textPrimary">Content text lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget</Typography>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions disableSpacing={disableSpacing}>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary" variant="contained">Save</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>

      <ExpansionPanel disabled elevation={elevation}>
        <ExpansionPanelSummary expandIcon={<Icon name="outlined-navigation-arrowbottom" size="small" />}>
          <Typography variant="subtitle1">Subtitle 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="subtitle1" color="textSecondary">Details text lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
