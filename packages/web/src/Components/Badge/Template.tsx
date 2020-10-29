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

const useStyles = makeStyles((theme: IThemeWeb) => createStyles({
  root: {
    "& > *": {
      marginRight: theme.sizes.small,
    },
  },
  shape: {
    backgroundColor: "#FF00FF1A",
    height: theme.sizes.semiX as number,
    width: theme.sizes.semiX as number,
  },
  shapeCircle: {
    borderRadius: theme.shape ? theme.shape.badgeBorderRadius : "",
  },
}), { name: "BadgeDemo" });

export const BadgeShapeCircleContent : Story<IBadgeProps> = (props: IBadgeProps) => {
  const { shape, shapeCircle } = useStyles();

  return <div className={clsx(shape, shapeCircle)} {...props} />;
};

export const BadgeShapeContent : Story<IBadgeProps> = (props: IBadgeProps) => {
  const { shape } = useStyles();

  return <div className={shape} {...props} />;
};

export const Template : Story<IBadgeProps> = (args: IBadgeProps) => (
  <Badge {...args}>
    {args.children && args.children}
    {!args.children && (args.overlap === "circle" ? <BadgeShapeCircleContent /> : <BadgeShapeContent />)}
  </Badge>
);

export const TemplateWithShapes : Story<IBadgeProps> = (args: IBadgeProps) => {

  const { root } = useStyles();

  return <div className={root}>
    <Badge {...args}>
      <BadgeShapeContent />
    </Badge>
    <Badge {...args}>
      <BadgeShapeCircleContent />
    </Badge>
    <Badge {...args}>
      {args.children || <Icon name={"outlined-communication-email"} />}
    </Badge>
  </div>;
};
export default Template;
