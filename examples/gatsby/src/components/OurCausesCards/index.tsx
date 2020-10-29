/* eslint-disable max-len */
import * as React from "react";
import {
  Card, CardContent, GridContainer, GridItem, Image, Spacing, Typography,
} from "@naturacosmeticos/natds-web";

const cards = [
  {
    alt: "Mulher negra sentada em um tronco de árvore acima de um rio no meio da Amazônia olhando para o horizonte.",
    children: "Contribuímos na preservação de 1,8 milhão de hectares na Amazônia, o equivalente a 12 vezes a cidade de SP e 14 vezes a cidade do RJ.",
    src: "https://accounts.natura.com/queroserconsultora/static/872c40e18ba58fa50b5c94ec85f341a1/9056c/amazonia.webp",
    title: "Amazônia Viva",
  },
  {
    children: "Reutilizamos 432 toneladas de plástico nas embalagens, ou seja, por ano, 9 milhões de garrafas PET de 2 litros deixam de ir para o lixo.",
    src: "https://accounts.natura.com/queroserconsultora/static/4d7c2ae9dda7853f18f16e0ee4054fb7/9056c/oceano_de_plastico.webp",
    title: "Mais beleza, menos lixo",
  },
];

export const OurCausesCards : React.FunctionComponent = () => <GridContainer spacing={1}>
  {cards.map(
    (card, index) => (
      <GridItem key={index} xs={12} sm={6}>
        <Spacing marginBottom={"standard"}>
          <Card>
            <Image alt={card.alt} src={card.src} style={{ maxWidth: "100%", height: "auto" }} />
            <CardContent>
              <Typography component={"h3"} variant={"subtitle1"}>{card.title}</Typography>
              <Typography component={"p"} paragraph={true} variant={"body2"}>{card.children}</Typography>
            </CardContent>
          </Card>
        </Spacing>
      </GridItem>
    ))}
</GridContainer>;

export default OurCausesCards;
