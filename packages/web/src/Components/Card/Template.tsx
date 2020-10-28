import { Story } from "@storybook/react";
import * as React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ICardProps } from "./Card.props";
import { Card } from "./Card";
import { Collapse, ICollapseProps } from "../Collapse";
import { WithIconButtonsAndDisabledSpacing } from "../CardActions/CardActions.stories";
import { IconButton } from "../IconButton";
import { CardHeader } from "../CardHeader";
import { Playground as CardHeaderPlayground } from "../CardHeader/CardHeader.stories";
import { CardMedia } from "../CardMedia";
import { Playground as CardMediaPlayground } from "../CardMedia/CardMedia.stories";
import { CardContent } from "../CardContent";
import { WithBody2Typography } from "../CardContent/CardContent.stories";
import { CardActions } from "../CardActions";
import { ExpandExample } from "../IconButton/IconButton.stories";
import { ForCardContent } from "../Collapse/Collapse.stories";

export const Template : Story<ICardProps> = (args : ICardProps) => (
  <Card {...args} />
);

export const PlaygroundTemplate : Story<ICardProps> = (args: ICardProps) => {

  const [expanded, setExpanded] = React.useState<ICollapseProps["in"]>(false);

  const handleExpandClick = () => {
    setExpanded((oldValue: ICollapseProps["in"]) => !oldValue);
  };

  const [AddToFavorites, Share] = WithIconButtonsAndDisabledSpacing.args.children as Array<typeof IconButton>;

  /**
   * @todo use time/duration token from `natds-themes` ssot
   */
  const transition = "transform 0.1s ease-in-out";

  const style = createStyles({
    collapsedIcon: {
      transform: "rotate(0deg)",
      transition,
    },
    expandedIcon: {
      transform: "rotate(180deg)",
      transition,
    },
  });

  const useStyles = makeStyles(style, { name: "CardDemo" });

  const { collapsedIcon, expandedIcon } = useStyles();

  return (
    <Card {...args}>
      <CardHeader {...CardHeaderPlayground.args} />
      <CardMedia {...CardMediaPlayground.args} />
      <CardContent {...WithBody2Typography.args} />
      <CardActions {...WithIconButtonsAndDisabledSpacing.args}>
        {AddToFavorites}
        {Share}
        <IconButton {...ExpandExample.args}
          aria-expanded={expanded}
          className={expanded ? expandedIcon : collapsedIcon}
          onClick={handleExpandClick} />
      </CardActions>
      <Collapse {...ForCardContent.args}
        in={expanded} />
    </Card>
  );
};

export default Template;
