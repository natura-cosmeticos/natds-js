import * as React from 'react';
import { number } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Avatar,
  Typography,
  IconButton,
  Button,
} from '@naturacosmeticos/natds-web';

import {
  FavoriteBorder as FavoriteBorderIcon,
  ShareOutlined as ShareOutlinedIcon,
  ExpandMore as ExpandMoreIcon,
  MoreVert as MoreVertIcon,
} from '@material-ui/icons';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';

import CardDocs from './Card.docs.mdx';

export default {
  title: 'Web|Card',
  component: Card,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Card'],
    theme: 'web',
    docs: {
      page: CardDocs,
    },
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  })
);

const source: any = {
  avatar: require('../../assets/images/1.png'),
  media: require('../../assets/images/media.jpeg'),
};

export const Interactive = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ maxWidth: number('Card maxWidth', 328) }}>
      <CardHeader
        avatar={<Avatar src={source.avatar} color="default" />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography variant="body1">Body 1</Typography>}
        subheader={<Typography variant="body2">Body 2</Typography>}
      />
      <CardMedia
        style={{ height: number('CardMedia height', 184) }}
        image={source.media}
        title="media image"
      />
      <CardContent>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus
          massa ut tellus euismod, id accumsan massa tristique. Etiam suscipit
          ultrices cursus.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          children={<FavoriteBorderIcon />}
        />
        <IconButton aria-label="share" children={<ShareOutlinedIcon />} />
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          children={<ExpandMoreIcon />}
        />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dapibus massa ut tellus euismod, id accumsan massa tristique. Etiam
            suscipit ultrices cursus. Integer rhoncus leo orci, sit amet aliquet
            risus venenatis at. Fusce varius nunc sed erat aliquam tempor. Sed
            sagittis nisl non diam maximus, sed elementum nibh mattis. Integer
            eu pharetra leo. Nulla justo tellus, mattis quis feugiat in,
            vulputate vitae lorem.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export const Simple = () => (
  <Card style={{ maxWidth: 328 }}>
    <CardContent>
      <Typography variant="overline" color="textSecondary">
        OVERLINE
      </Typography>
      <Typography variant="h6">Header 6</Typography>
      <Typography variant="caption" color="textSecondary" paragraph>
        Caption
      </Typography>
      <Typography variant="body2">
        Body 2 lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
        fringilla erat
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">BUTTON</Button>
    </CardActions>
  </Card>
);

export const Media = () => (
  <Card style={{ maxWidth: 328 }}>
    <CardMedia
      style={{ height: 184 }}
      image={source.media}
      title="media image"
    />
    <CardContent>
      <Typography variant="h6" paragraph>
        Header 6
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus
        massa ut tellus euismod, id accumsan massa tristique. Etiam suscipit
        ultrices cursus.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <Button aria-label="button" children="button" />
    </CardActions>
  </Card>
);
