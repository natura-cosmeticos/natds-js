import * as React from "react";
import { tokens } from "@naturacosmeticos/natds-styles";
import Skeleton from ".";
import {IStorySections} from "../types/IStorySections";
import Avatar from "../Avatar";
import Typography, {TypographyVariant} from "../Typography";

export const variants: IStorySections = [
  {
    component: <Skeleton variant={"text"} />,
    title: "Text",
  },
  {
    component: <Skeleton variant={"circle"} height={tokens.sizes.semix} width={tokens.sizes.semix} />,
    title: "Circle: semix size (40px)",
  },
  {
    component: <Skeleton variant={"rect"} height={tokens.sizes.hugex} width={tokens.sizes.veryhuge} />,
    title: "Rect",
  },
];

export const animations: IStorySections = [
  {
    component: <Skeleton width={tokens.sizes.veryhuge} />,
    title: "Default animation (pulsate)",
  },
  {
    component: <Skeleton animation={false} width={tokens.sizes.veryhuge} />,
    title: "No animation",
  },
  {
    component: <Skeleton animation="wave" width={tokens.sizes.veryhuge} />,
    title: "Wave animation",
  },
];

const typographyVariants : TypographyVariant[] = ["h1",
  "h3",
  "body1",
  "caption"];

export const forTypography: IStorySections = typographyVariants.map((variant) => ({
  component: <Typography variant={variant}><Skeleton /></Typography>,
  title: variant,
}));

const avatarAltText = "Nat Natura Avatar";
const avatarUrl = "https://pbs.twimg.com/profile_images/1285932878795333632/Wl95KE_m_400x400.jpg";

export const forAvatar : IStorySections = [
  {
    component: <Skeleton variant={"circle"}><Avatar alt={avatarAltText} size={"huge"} src={avatarUrl} /></Skeleton>,
    title: "Avatar (loading)",
  },
  {
    component: <Avatar alt={avatarAltText} size={"huge"} src={avatarUrl} />,
    title: "Avatar (loaded)",
  },
];
