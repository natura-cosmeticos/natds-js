import * as React from "react";
import MaterialAvatar from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IAvatarProps } from "./Avatar.props";
import { IThemeWeb } from "../../Themes";
import styles from "./Avatar.styles";
import { Icon } from "../Icon";

/**
 * ## Importing
 *
 * For more advanced usages, check [Material UI Avatar docs](https://material-ui.com/components/avatars/)
 *
 * ```
 * import { Avatar } from "@naturacosmeticos/natds-web";
 * ```
 */
export const Avatar = React.forwardRef<HTMLDivElement, IAvatarProps>((
  props: IAvatarProps, ref,
) => {

  const {
    color,
    size,

    /**
     * @deprecated `variant` property is deprecated since 0.19.0.
     * It will be removed on 1.0 and all Avatar variants will be `circle` by default.
     */
    variant,
    ...otherProps
  } = props;

  const useStyles = makeStyles(
    (theme: IThemeWeb) => styles({ color, size, theme }), { name: "NatDsAvatar" },
  );

  const classes = useStyles();

  return <MaterialAvatar
    classes={classes}
    variant={variant}
    {...otherProps}
    ref={ref}>{props.children || <Icon name={"outlined-social-person"} />}</MaterialAvatar>;
});

Avatar.displayName = "Avatar";
export default Avatar;
