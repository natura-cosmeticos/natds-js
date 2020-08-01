import * as React from "react";

import {boolean, select, text} from "@storybook/addon-knobs";
import {Fab, Icon} from "@naturacosmeticos/natds-web"
import {colors, sizes, variants} from ".";
import { iconNames } from "@naturacosmeticos/natds-icons";

export const Interactive = () => {
  const variant = select("variant", variants, variants.round);

  const icons: any = Object.keys(iconNames);
  const iconName = select("icon name", icons, "outlined-action-add");

  const IconComponent = <Icon name={iconName} size={"small"} />
  const content = variant === variants.round ? IconComponent : text("content", "Extended");

  const leadingIcon = variant === variants.round
    ? undefined
    : boolean("Leading Icon", false);

  return (
    <Fab
      color={select("color", colors, colors.primary)}
      size={select("size", sizes, sizes.large)}
      variant={select("variant", variants, variants.round)}
      disabled={boolean("disabled", false)}
    >
      {leadingIcon && IconComponent}
      {content}
    </Fab>
  );
};
