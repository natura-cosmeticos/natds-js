import * as React from "react";
import Table from "@addons/Table";
import { tokens } from "@naturacosmeticos/natds-styles";

import tokensParams from "../shared";

import "./styles.scss";

const { elevation } = tokens;

const sortedElevation = Object.entries(elevation).sort(([
  keyA,
  valA
], [
  keyB,
  valB
]) => valA - valB);

const mapSchema = (item: any) => [
  {
    "name": item[0].toString(),
    "type": "text"
  },
  {
    "name": item[1].toString(),
    "type": "text"
  }
];

const elevationSchema = {
  "head": [
    "name",
    "value"
  ],
  "body": sortedElevation.map(mapSchema)
};

export default {
  "title": "Design Tokens|Elevation",
  "parameters": {
    "docs": {
      "container": null,
      "page": () => <Table schema={elevationSchema} title="Elevation" />
    },
    ...tokensParams
  }
};

const Elevation = ({ name, value }: any) => <div className="elevation__item__container">
  <div className="elevation__outer__box">
    <div className="elevation__inner__box" style={{"boxShadow": value}} />
  </div>
  <span>{name}</span>
</div>;

export const Scale = () => <div className="elevation__container">
  <h4 className="elevation__container__title">Elevation</h4>
  <div>
    {sortedElevation.map(([
      key,
      value
    ]) => <Elevation name={key} key={key} value={value} />
    )}
  </div>
</div>;

