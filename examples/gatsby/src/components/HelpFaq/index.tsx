/* eslint-disable max-len */
import { ITypographyProps } from "@naturacosmeticos/natds-web";
import * as React from "react";
import { HelpFaqItem } from "../HelpFaqItem";

type FaqItem = {
  title: string | ITypographyProps["children"],
  excerpt: string | ITypographyProps["children"],
  children: string | ITypographyProps["children"],
};

const faqItems : FaqItem[] = [
  {
    title: "Como ser Consultora Natura?",
    excerpt: "Para se cadastrar na Consultoria de Beleza Natura é muito simples| Basta seguir as instruções",
    children: <p>Para se cadastrar na Consultoria de Beleza Natura é muito simples! Basta seguir as instruções abaixo:</p>,
  },
];

export const HelpFaq : React.FunctionComponent = () => (
  <>
    {faqItems.map((item: FaqItem, index: number) => (
      <HelpFaqItem key={index} {...item}>{item.children}</HelpFaqItem>
    ))}
  </>
);

export default HelpFaq;
