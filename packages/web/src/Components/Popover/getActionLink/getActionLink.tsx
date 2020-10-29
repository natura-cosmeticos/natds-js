import * as React from "react";
import Link from "../../Link";
import { IActionLink } from "./ActionLink.props";

export const getActionLink: (actionLink?: IActionLink) => (JSX.Element | null) = (actionLink?: IActionLink) => {

  if (!actionLink) {
    return null;
  }

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children,
    text,
    ...otherProps
  } = actionLink;

  return (
    <Link {...otherProps} variant="body2" className="popover-action-link">
      {text}
    </Link>
  );

};

export default getActionLink;
