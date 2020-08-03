import * as React from "react";
import {boolean, select, text} from "@storybook/addon-knobs";
import {iconNames} from "@naturacosmeticos/natds-icons";
import { getDefaultDecorators, getComponentParams } from "../../../.storybook";
import Fab, {colors, sizes, variants} from "./index";
import Icon from "../Icon";

export default {
  decorators: getDefaultDecorators(),
  parameters: getComponentParams(["Fab"]),
  title: "Playground|Fab",
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Interactive = () => {
  const variant = select("variant", variants, variants.round);

  const icons: string[] = Object.keys(iconNames);
  const iconName = select("icon name", icons, "outlined-action-add");

  const IconComponent = <Icon name={iconName} size={"small"} />;
  const content = variant === variants.round ? IconComponent : text("content", "Extended");

  const leadingIcon = variant === variants.round
    ? null
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
