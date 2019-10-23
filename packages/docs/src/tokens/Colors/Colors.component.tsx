import * as React from 'react';
import * as colors from '@naturacosmeticos/natds-styles/sass/natura.scss';

import './styles.scss';

function filterGroup(filter: string) {
  return Object.keys(colors).filter(color => color.split('-')[0] === filter);
}

function BuildColorList(color: string) {
  const colorValue = colors[color];
  const colorStyle = { background: colorValue };

  const group = color.split('-')[0];
  const name = color.replace(group + '-', '');

  return (
    <li className="colors__item" key={color}>
      <span className="colors__item__color" style={colorStyle} />
      <p className="colors__item__name">${name}</p>
      <p className="colors__item__color-name">{colorValue}</p>
    </li>
  );
}

interface IColorsGroup {
  id: string;
  name: string;
}

const ColorsGroup = ({ name, id }: IColorsGroup, index: number = 0) => (
  <div className="colors__group" key={index}>
    <h3 className="colors__group__title">{name}</h3>
    <ul className="colors__group__list">
      {filterGroup(id).map(BuildColorList)}
    </ul>
  </div>
);

interface IColorsComponent {
  colors: object[];
}

export default function ColorsComponent(props: IColorsComponent) {
  return (
    <div className="colors__container">
      {props.colors.map(ColorsGroup)}
    </div>
  );
}
