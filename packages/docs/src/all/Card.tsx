import * as React from "react";
import {
  Avatar,
  IconButton,
  Icon,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
} from "@naturacosmeticos/natds-web";
import clsx from "clsx";
import { useStyles } from "./styles";

const source: any = {
  avatar: require("../assets/images/1.png"),
  media: require("../assets/images/media.jpeg"),
};

export const WrappedCard = () => {
  const classes = useStyles();
  const [
    expanded, setExpanded,
  ] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.container}>
      <Card style={{ maxWidth: 300 }}>
        <CardHeader
          avatar={<Avatar src={source.avatar} color="default" />}
          action={
            <IconButton aria-label="settings">
              <Icon size="tiny" name="outlined-navigation-menu" />
            </IconButton>
          }
          title={<Typography variant="body1">Body 1</Typography>}
          subheader={<Typography variant="body2">Body 2</Typography>}
        />
        <CardMedia
          style={{ height: 184 }}
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
            children={<Icon size="tiny" name="outlined-action-love" />}
          />
          <IconButton aria-label="share" children={<Icon size="tiny" name="outlined-action-share" />} />
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            children={<Icon size="tiny" name="outlined-navigation-arrowbottom" />}
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
    </div>
  );
};
