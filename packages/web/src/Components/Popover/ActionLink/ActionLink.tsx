// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { Link } from "../../Link";
import { IActionLinkProps } from "./ActionLink.props";

export { IActionLinkProps } from "./ActionLink.props";

export const ActionLink = React.forwardRef<HTMLAnchorElement, IActionLinkProps>(
  (props: IActionLinkProps, ref: IActionLinkProps["ref"]) => {

    if (!props) {
      return null;
    }

    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      children,
      classes,
      className = "popover-action-link",
      text,
      variant = "body2",
      ...otherProps
    } = props;

    return (
      <Link
        classes={classes}
        className={className}
        ref={ref}
        variant={variant}
        {...otherProps}>
        {text}
      </Link>
    );
  },
);
ActionLink.displayName = "ActionLink";

export default ActionLink;
