import * as React from "react";
import Table from "@addons/Table";
import { tokens } from "@naturacosmeticos/natds-styles";

import tokensParams from "../shared";

import "./styles.scss";

const { overlay } = tokens;

const sortedOverlay = Object.entries(overlay).sort(([
  keyA, valA,
], [
  keyB, valB,
]) => valA - valB);

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

const overlaySchema = {
  head: [
    "name", "value",
  ],
  body: sortedOverlay.map(mapSchema),
};

export default {
  title: "Design Tokens|Overlay",
  parameters: {
    docs: {
      container: null,
      page: () => <Table schema={overlaySchema} title="Overlay" />,
    },
    ...tokensParams,
  },
};

const OverlayBox = ({ name, value }: any) => <div className="overlay__item__container">
  <div className="overlay__outer__box">
    <div className="overlay__inner__box" style={{opacity: value}} />
  </div>
  <span>{name}</span>
</div>;

export const Scale = () => <div className="overlay__container">
  <h4 className="overlay__container__title">Overlay</h4>
  <div>
    {sortedOverlay.map(([
      key, value,
    ]) => <OverlayBox name={key} key={key} value={value} />,
    )}
  </div>
</div>;
