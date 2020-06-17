import * as React from 'react';

import './styles.scss';

export interface IComponentWithLabelItem {
  title?: string;
  component: any;
}

export interface IComponentWithLabelProps {
  componentList: IComponentWithLabelItem[];
  itemsPerRow?: number;
}

export default function ComponentWithLabel(props: IComponentWithLabelProps) {
  const { componentList, itemsPerRow } = props;

  return (
    <ul className="component__list">
      {componentList.map(BuildComponentItem, { itemsPerRow })}
    </ul>
  );
}

function BuildComponentItem({ title, component }: IComponentWithLabelItem, key: number) {
  const { itemsPerRow = 'auto' }:any = this;
  const styles = itemsPerRow === 'auto' ? {} : { flexBasis: `${100 / itemsPerRow}%` };

  return (
    <li className="component__item" key={key} style={styles}>
      <h5 className="component__item__title">{title}</h5>
      {component}
    </li>
  );
}
