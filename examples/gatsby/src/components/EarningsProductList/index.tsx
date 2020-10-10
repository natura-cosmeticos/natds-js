import { ITypographyProps, Typography } from "@naturacosmeticos/natds-web";
import * as React from "react";

type Product = {
  children: ITypographyProps["children"],
  title: ITypographyProps["children"]
}

const products : Product[] = [
  {
    title: "Ekos Castanha",
    children: "100% vegano e ajuda a manter a floresta em pé",
  },
  {
    title: "Tododia Flor de Lis",
    children: "Nutrição prebiótica e ingredientes naturais",
  },
  {
    title: "Essencial Supreme",
    children: "A ousadia do Pará com a sofisticação de Paris",
  },
  {
    title: "Lumina Máscara",
    children: "Biotecnologia pró-teia e frasco de plástico verde",
  },
];

export const EarningsProductList : React.FunctionComponent = () => (
  <ol>
    {products.map((value: Product, index: number) => (<li key={index}>
      <Typography component={"h4"} variant={"subtitle2"}>{value.title}</Typography>
      <Typography component={"p"} variant={"caption"} paragraph={true}>{value.children}</Typography>
    </li>))}
  </ol>
);

export default EarningsProductList;
