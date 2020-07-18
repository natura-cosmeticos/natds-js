import * as React from "react";
import { TypographyScale } from "./TypographyScale";
import tokensParams from "../shared";
import { TypographyFontFamily } from "./TypographyFontFamily";
import { TypographyFontSize } from "./TypographyFontSize";

export default {
  title: "Design Tokens|Typography",
  parameters: {
    theme: {
      context: "web",
    },
    ...tokensParams,
  },
};

export const Scale = () => <TypographyScale />;

export const FontFamily = () => <TypographyFontFamily />;

export const FontSize = () => <TypographyFontSize />;
