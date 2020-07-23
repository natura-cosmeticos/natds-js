import * as React from "react";
import Table from "@addons/Table";
import { tokens } from "@naturacosmeticos/natds-styles";

import tokensParams from "../shared";

import "./styles.scss";

const { opacity } = tokens;

const sortedOpacity = Object.entries(opacity).sort(([
  keyA, valA,
], [
  keyB, valB,
]) => valA - valB);

const mapSchema = (item: any) => [
  {
    name: item[0].toString(),
    type: "text",
  },
  {
    name: item[1].toString(),
    type: "text",
  },
];

const opacitySchema = {
  head: [
    "name", "value",
  ],
  body: sortedOpacity.map(mapSchema),
};

export default {
  title: "Design Tokens|Opacity",
  parameters: {
    docs: {
      container: null,
      page: () => <Table schema={opacitySchema} title="Opacity" />,
    },
    ...tokensParams,
  },
};

const OpacityBox = ({ name, value }: any) => <div className="opacity__item__container">
  <div className="opacity__outer__box">
    <div className="opacity__inner__box" style={{opacity: value}} />
  </div>
  <span>{name}</span>
</div>;

export const Scale = () => <div className="opacity__container">
  <h4 className="opacity__container__title">Opacity</h4>
  <div>
    {sortedOpacity.map(([
      key, value,
    ]) => <OpacityBox name={key} key={key} value={value} />)}
  </div>
</div>;
