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
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
}));

export const Interactive = () => {
  const classes = useStyles();
  const disabled = boolean('disabled', false);
  const disableSpacing = boolean('disable action spacing', false);

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon name="outlined-navigation-arrowbottom" size="small" />}>
          <Typography variant="body1">Simple</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography variant="caption">Content</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        disabled={disabled}>
        <ExpansionPanelSummary expandIcon={<Icon name="outlined-navigation-arrowbottom" size="small" />}>
          <Typography variant="body1">Custom</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column}>
            <Typography variant="body2">Content</Typography>
          </div>
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
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">Save</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
};
