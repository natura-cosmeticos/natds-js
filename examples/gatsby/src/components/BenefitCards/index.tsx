/* eslint-disable max-len */
import { GridContainer, GridItem } from "@naturacosmeticos/natds-web";
import * as React from "react";
import BenefitCard, { BenefitCardProps } from "../BenefitCard";

const data : BenefitCardProps[] = [
  {
    children: "Descontos exclusivos e cursos gratuitos para você e sua família. Mais de 80 opções de cursos entre: graduação e pós, idiomas e profissionalizante.",
    image: "https://accounts.natura.com/queroserconsultora/static/42b57ee5fd679f7fde0c33c02a8a020c/0202b/beneficios_educacao.png",
    title: "Educação",
  },
  {
    children: "Uma página online exclusiva no site da Natura, para você divulgar e vender para todo o Brasil, 24 horas por dia e 7 dias por semana, sem sair de casa!",
    image: "https://accounts.natura.com/queroserconsultora/static/42b57ee5fd679f7fde0c33c02a8a020c/0202b/beneficios_educacao.png",
    title: "Vendas pela Internet",
  },
  {
    children: "As Consultoras Natura contam com plano de crescimento de 5 níveis (de Semente até Diamante) com lucros de até 35%!",
    image: "https://accounts.natura.com/queroserconsultora/static/42b57ee5fd679f7fde0c33c02a8a020c/0202b/beneficios_educacao.png",
    title: "Ganhos diferenciados",
  },
  {
    children: "Prêmios, joias, concursos, carro, viagens e outros benefícios exclusivos para Consultoras de Beleza Natura.",
    image: "https://accounts.natura.com/queroserconsultora/static/42b57ee5fd679f7fde0c33c02a8a020c/0202b/beneficios_educacao.png",
    title: "Reconhecimento",
  },
];

export const BenefitCards : React.FunctionComponent = () => (<GridContainer spacing={2}>
  {data.map((value, index) => (
    <GridItem key={index} xs={12} sm={6} md={3}>
      <BenefitCard {...value}>{value.children}</BenefitCard>
    </GridItem>
  ))}
</GridContainer>);

export default BenefitCards;
