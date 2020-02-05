import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { boolean } from '@storybook/addon-knobs';
import {
  Button,
  Chip,
  Divider,
  ExpansionPanel,
  ExpansionPanelActions,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Icon,
  Link,
  Typography
} from '@naturacosmeticos/natds-web';
import ExpansionPanelDocs from './ExpansionPanel.docs.mdx';

export default {
  title: 'Components|ExpansionPanel',
  component: ExpansionPanel,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['ExpansionPanel'],
    theme: {
      context: 'web'
    },
    docs: {
      page: ExpansionPanelDocs
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '800px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export const Interactive = () => {
  const classes = useStyles();
  const disabled = boolean('disabled', false);
  const disableSpacing = boolean('disable action spacing', false);

  return (
    <div>
      <div className={classes.root}>
        <ExpansionPanel
          disabled={disabled}>
          <ExpansionPanelSummary
            expandIcon={<Icon name="outlined-navigation-arrowbottom" size="small" />}
            aria-controls="panel1c-content"
            id="panel1c-header">
            <div className={classes.column}>
              <Typography className={classes.heading}>Location</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <div className={classes.column}>
              <Chip label="Barbados" onDelete={() => { }} />
            </div>
            <div className={classes.column}>
              <Typography variant="caption">
                Select your destination of choice
                <br />
                <Link href="#secondary-heading-and-columns">Learn more</Link>
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions disableSpacing={disableSpacing}>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">Save</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    </div>
  );
};
