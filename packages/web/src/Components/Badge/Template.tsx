import * as React from "react";

import { Story } from "@storybook/react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import clsx from "clsx";
import { IBadgeProps } from "./Badge.props";
import { IThemeWeb } from "../../Themes";
import Badge from "./Badge";
import * as IconStories from "../Icon/Icon.stories";
import { Icon } from "../Icon";

const useStyles = makeStyles(createStyles((theme: IThemeWeb) => ({
  root: {
    "& > *": {
      marginRight: theme.sizes.small,
    },
  },
  shape: {
    backgroundColor: "#FF00FF1A",

    /**
     * @todo check why IDE shows warning: 'semiX' should probably not be assigned to 'height'
     */
    height: theme.sizes.semiX,
    width: theme.sizes.semiX,
  },
  shapeCircle: {
    borderRadius: theme.shape.badgeBorderRadius,
  },
})), { name: "BadgeDemo" });

export const BadgeShapeCircleContent : Story<IBadgeProps> = (props) => {
  const classes = useStyles();

  // eslint-disable-next-line dot-notation
  return <div className={clsx(classes["shape"], classes["shapeCircle"])} {...props} />;
};

export const BadgeShapeContent : Story<IBadgeProps> = (props) => {
  const classes = useStyles();

  // eslint-disable-next-line dot-notation
  return <div className={classes["shape"]} {...props} />;
};

export const Template : Story<IBadgeProps> = (args) => <Badge {...args}>
  {args.children || args.overlap === "circle" ? <BadgeShapeCircleContent /> : <BadgeShapeContent />}
</Badge>;

export const TemplateWithShapes : Story<IBadgeProps> = (args) => {

  const classes = useStyles();

  // eslint-disable-next-line dot-notation
  return <div className={classes["root"]}>
    <Badge {...args}>
      <BadgeShapeContent />
    </Badge>
    <Badge {...args}>
      <BadgeShapeCircleContent />
    </Badge>
    <Badge {...args}>
      {args.children || <Icon name={"outlined-communication-email"} {...IconStories.OutlinedEmailIcon.args} />}
    </Badge>
  </div>;
};
export default Template;
