import * as React from "react";

import "./styles.scss";

interface ISizesScaleComponent {
  sizes: any;
}

export default function SizesScale(props: ISizesScaleComponent) {
  return (
    <div className="sizes__scale">
      {Object.entries(props.sizes).map(sizeBlock)}
    </div>
  );
}

const sizeBlock = ([
  name, value]: any[
], key: number) => {
  const style = { width: `${value}px` };

  return (
    <div className="sizes__scale__block" key={key}>
      <div className="sizes__scale__box__container">
        <div className="sizes__scale__box" style={style} />
      </div>
      <h5 className="sizes__scale__name">{name} | {value}</h5>
    </div>
  );
};
