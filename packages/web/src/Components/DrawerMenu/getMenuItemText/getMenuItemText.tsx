import * as React from "react";
import Typography from "../../Typography";
import { StyledBadge } from "../StyledBadge";
import ContextualBadge from "../../ContextualBadge";
import { IDrawerMenuSectionProps } from "../DrawerMenuSection/DrawerMenuSection.props";

export const getMenuItemText = (props: IDrawerMenuSectionProps) => {
  const { badge, name, theme } = props;

  if (!badge) {
    return name;
  }

  return (
    <>
      <Typography variant="body2" component="span">{name}</Typography>
      <StyledBadge as={ContextualBadge} theme={theme} color="error">{badge}</StyledBadge>
    </>
  );
};

export default getMenuItemText;
