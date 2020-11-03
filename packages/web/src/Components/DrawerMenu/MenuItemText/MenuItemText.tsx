// eslint-disable-next-line no-use-before-define
import * as React from "react";
import Typography from "../../Typography";
import ContextualBadge from "../../ContextualBadge";
import { IDrawerMenuSectionProps } from "../DrawerMenuSection";
import { useStyles } from "./MenuItemText.styles";

export const MenuItemText : React.FunctionComponent<IDrawerMenuSectionProps> = (props: IDrawerMenuSectionProps) => {
  const { badge, name } = props;
  const { badgeComponent } = useStyles();

  return (
    <>
      <Typography variant="body2" component="span">
        {name}
      </Typography>
      {badge && <ContextualBadge className={badgeComponent} color="error">
        {badge}
      </ContextualBadge>}
    </>
  );
};

export default MenuItemText;
