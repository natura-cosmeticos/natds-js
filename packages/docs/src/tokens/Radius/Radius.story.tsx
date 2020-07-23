import * as React from "react";
import Table from "@addons/Table";
import { tokens } from "@naturacosmeticos/natds-styles";

import tokensParams from "../shared";

import "./styles.scss";

const { radius } = tokens;

const mapSchema = (item: any) => [
  {
    name: item[0],
    type: "text",
  },
  {
    name: item[1],
    type: "text",
  },
];

const radiusSchema = {
  head: [
    "name", "value",
  ],
  body: Object.entries(radius).map(mapSchema),
};

export default {
  title: "Design Tokens|Radius",
  parameters: {
    docs: {
      container: null,
      page: () => <Table schema={radiusSchema} title="Radius" />,
    },
    ...tokensParams,
  },
};

interface IRadiusItem {
  name: string;
  borderRadius: string | number;
}

const RadiusItem: React.FunctionComponent<IRadiusItem> = ({ name, borderRadius }) => <div className="radius__item">
  <div className="radius__box" style={{borderRadius}}/>
  <span>{`${borderRadius} - ${name}`}</span>
</div>;

export const Scale = () => <div className="radius__container">
  <h4 className="radius__container__title">Base = 4</h4>
  {Object.entries(radius).map(([
    key, value,
  ]) => <RadiusItem name={key} key={key} borderRadius={value} />)}
</div>;
