// eslint-disable-next-line no-use-before-define
import * as React from "react";
import Typography from "../../Typography";
import { Tag } from "../../Tag";
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
      {badge && <Tag className={badgeComponent} color="error">
        {badge}
      </Tag>}
    </>
  );
};

export default MenuItemText;
