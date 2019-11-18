import * as React from 'react';

import './styles.scss';

interface IColors {
  colors: any;
}

export default function Colors(props: IColors) {
  return (
    <div className="colors__container">
      {Object.entries(props.colors).map(ColorsGroup)}
    </div>
  );
}

const BuildColorList = ([name, value]: any[], key: number) => (
  <li className="colors__item" key={key}>
    <span className="colors__item__color" style={{ background: value }} />
    <p className="colors__item__name">${name}</p>
    <p className="colors__item__color-name">{value}</p>
  </li>
);

const ColorsGroup = ([name, colors]: any[], index: number = 0) => (
  <div className="colors__group" key={index}>
    <h3 className="colors__group__title">{name}</h3>
    <ul className="colors__group__list">
      {Object.entries(colors).map(BuildColorList)}
    </ul>
  </div>
);
