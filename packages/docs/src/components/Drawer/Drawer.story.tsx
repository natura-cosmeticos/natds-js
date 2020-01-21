import * as React from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { select, boolean, text, number } from '@storybook/addon-knobs';

import {
  Collapse,
  ContextualBadge,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@naturacosmeticos/natds-web';

import DrawerDocs from './Drawer.docs.mdx';

export default {
  title: 'Components|Drawer',
  component: Drawer,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Drawer'],
    theme: {
      context: 'web'
    },
    docs: {
      page: DrawerDocs
    }
  }
};

const styles = {
  badge: {
    display: 'inline-block',
    marginLeft: '5px'
  }
};

const anchors = {
  left: 'left',
  top: 'top',
  right: 'right',
  bottom: 'bottom'
};

const variants = {
  permanent: 'permanent',
  persistent: 'persistent',
  temporary: 'temporary',
};

export const Interactive = () => {
  const classes = makeStyles((theme: Theme) => createStyles({
    drawer: {
      width: number('width', 256),
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'space-between',
      flexFlow: 'column nowrap'
    },
  }))();

  const [menuOpen, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!menuOpen);
  const iconName = menuOpen ? 'outlined-navigation-arrowtop' : 'outlined-navigation-arrowbottom';

  return (
    <Drawer
      open={boolean('open', false)}
      anchor={select('anchor', anchors, anchors.left)}
      variant={select('variant', variants, variants.permanent)}
      classes={{ paper: classes.drawer }}>

      <DrawerHeader
        avatarSrc={require('../../assets/images/1.png')}
        primary={text('title', 'Hello, Long Name Lorem ipsum dolor sit amet...')}
        secondary={text('subtitle', 'Option')}
      />

      <DrawerBody>
        <List>
          <ListItem onClick={handleClick}>
            <ListItemIcon>
              <Icon name="outlined-action-love" size="small" />
            </ListItemIcon>
            <ListItemText children={
              <>
                <Typography variant="body1" component="span">Menu Item</Typography>
                <ContextualBadge style={styles.badge} color="error" children="Novo" />
              </>
            } />
            <Icon name={iconName} size="tiny" />
          </ListItem>
          <Collapse in={menuOpen} timeout="auto" unmountOnExit>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Icon name="outlined-action-love" size="small" />
                </ListItemIcon>
                <ListItemText primary="Subtitle 1" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon name="outlined-action-love" size="small" />
                </ListItemIcon>
                <ListItemText primary="Subtitle 1" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon name="outlined-action-love" size="small" />
                </ListItemIcon>
                <ListItemText primary="Subtitle 1" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon name="outlined-action-love" size="small" />
                </ListItemIcon>
                <ListItemText primary="Subtitle 1" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon name="outlined-action-love" size="small" />
                </ListItemIcon>
                <ListItemText primary="Subtitle 1" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon name="outlined-action-love" size="small" />
                </ListItemIcon>
                <ListItemText primary="Subtitle 1" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon name="outlined-action-love" size="small" />
                </ListItemIcon>
                <ListItemText primary="Subtitle 1" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon name="outlined-action-love" size="small" />
                </ListItemIcon>
                <ListItemText primary="Subtitle 1" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon name="outlined-action-love" size="small" />
                </ListItemIcon>
                <ListItemText primary="Subtitle 1" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon name="outlined-action-love" size="small" />
                </ListItemIcon>
                <ListItemText primary="Subtitle 1" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon name="outlined-action-love" size="small" />
                </ListItemIcon>
                <ListItemText primary="Subtitle 1" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </DrawerBody>

      <DrawerFooter>
        bla
      </DrawerFooter>
    </Drawer>
  );
};
