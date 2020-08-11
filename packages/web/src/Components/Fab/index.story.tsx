import * as React from "react";
import {boolean, select, text} from "@storybook/addon-knobs";
import {iconNames} from "@naturacosmeticos/natds-icons";
import { getComponentParams } from "../../../.storybook";
import Fab from "./index";
import Icon from "../Icon";
import {colors, sizes, variants} from "./IFabProps";

export default {
  parameters: getComponentParams(["Fab"]),
  title: "Components|Fab",
};

export const Playground: () => JSX.Element = () => {
  const variant = select("variant", variants, variants.round);

  const icons: any = Object.keys(iconNames);
  const iconName: keyof typeof iconNames = select("icon name", icons, "outlined-action-add") as keyof typeof iconNames;

  const IconComponent = <Icon name={iconName} size={"small"} />;
  const content = variant === variants.round ? IconComponent : text("content", "Extended");

  const leadingIcon = variant === variants.round
    ? null
    : boolean("Leading Icon", false);

  return (
    <Fab
      color={select("color", colors, colors.primary)}
      disabled={boolean("disabled", false)}
      size={select("size", sizes, sizes.large)}
      variant={select("variant", variants, variants.round)}
    >
      {leadingIcon && IconComponent}
      {content}
    </Fab>
  );
};
