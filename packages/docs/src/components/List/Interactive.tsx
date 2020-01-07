import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  Icon,
  IconButton,
  Collapse,
  Switch,
  Checkbox,
} from '@naturacosmeticos/natds-web';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Divider } from '@naturacosmeticos/natds-web/dist/Components/Divider';
import { Typography } from '@naturacosmeticos/natds-web/dist/Components/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(3),
    },
    checkbox: {
      marginLeft: '-6px',
    },
  })
);

export const Interactive = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <List dense={boolean('List dense', false)}>
        <ListItem
          disabled={boolean('ListItem disabled', false)}
          button={boolean('ListItem selected', false)}
        >
          <ListItemText
            primary="Subtitle 1"
            secondary={
              boolean('ListItemText secondary', false) ? 'Secondary text' : ''
            }
          />
          <ListItemSecondaryAction>
            <Typography
              children="Caption"
              variant="caption"
              color="textSecondary"
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem
          disabled={boolean('ListItem disabled', false)}
          button={boolean('ListItem selected', false)}
          onClick={handleClick}
        >
          <ListItemIcon>
            <Icon name="outlined-action-love" size="small" />
          </ListItemIcon>
          <ListItemText
            primary="Subtitle 1"
            secondary={
              boolean('ListItemText secondary', false) ? 'Secondary text' : ''
            }
          />
          {open ? (
            <Icon name="outlined-navigation-arrowtop" size="tiny" />
          ) : (
            <Icon name="outlined-navigation-arrowbottom" size="tiny" />
          )}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding className={classes.nested}>
            <ListItem
              disabled={boolean('ListItem disabled', false)}
              button={boolean('ListItem selected', false)}
            >
              <ListItemIcon>
                <Icon name="outlined-action-love" size="small" />
              </ListItemIcon>
              <ListItemText
                primary="Subtitle 1"
                secondary={
                  boolean('ListItemText secondary', false)
                    ? 'Secondary text'
                    : ''
                }
              />
            </ListItem>
          </List>
        </Collapse>
        {boolean('Divider', false) ? <Divider /> : ''}
        <ListItem
          disabled={boolean('ListItem disabled', false)}
          button={boolean('ListItem selected', false)}
        >
          <ListItemText
            primary="Body 1"
            secondary={
              boolean('ListItemText secondary', false) ? 'Secondary text' : ''
            }
          />
        </ListItem>
        <ListItem
          disabled={boolean('ListItem disabled', false)}
          button={boolean('ListItem selected', false)}
        >
          <ListItemIcon>
            <Icon name="outlined-action-love" size="small" />
          </ListItemIcon>
          <ListItemText
            primary="Subtitle 1"
            secondary={
              boolean('ListItemText secondary', false) ? 'Secondary text' : ''
            }
          />
          <ListItemSecondaryAction>
            <Switch edge="end" checked={true} />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem
          disabled={boolean('ListItem disabled', false)}
          button={boolean('ListItem selected', false)}
        >
          <ListItemIcon>
            <Checkbox checked={true} className={classes.checkbox} />
          </ListItemIcon>
          <ListItemText
            primary="Subtitle 1"
            secondary={
              boolean('ListItemText secondary', false) ? 'Secondary text' : ''
            }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <Icon name="filled-navigation-more" size="tiny" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem
          disabled={boolean('ListItem disabled', false)}
          button={boolean('ListItem selected', false)}
        >
          <ListItemIcon>
            <Icon name="outlined-action-love" size="small" />
          </ListItemIcon>
          <ListItemText
            primary="Subtitle 1"
            secondary={
              boolean('ListItemText secondary', false) ? 'Secondary text' : ''
            }
          />
          <ListItemSecondaryAction>
            <Checkbox edge="end" checked={true} />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem
          disabled={boolean('ListItem disabled', false)}
          button={boolean('ListItem selected', false)}
        >
          <ListItemAvatar>
            <Avatar
              src={require('../../assets/images/1.png')}
              size="small"
              color="default"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Subtitle 1"
            secondary={
              boolean('ListItemText secondary', false) ? 'Secondary text' : ''
            }
          />
          <ListItemSecondaryAction>
            <Typography
              children="Caption"
              variant="caption"
              color="textSecondary"
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};
