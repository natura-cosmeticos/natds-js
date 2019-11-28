import * as React from 'react';

import './styles.scss';

interface IComponentWithLabelItem {
  title?: string;
  component: any[];
}

interface IComponentWithLabelProps {
  componentList: IComponentWithLabelItem[];
}

export default function ComponentWithLabel(props: IComponentWithLabelProps) {
  return (
    <ul className="component__list">
      {props.componentList.map(BuildComponentItem)}
    </ul>
  );
}

const BuildComponentItem = ({ title, component }: IComponentWithLabelItem, key: number) => (
  <li className="component__item" key={key}>
    <h5 className="component__item__title">{title}</h5>
    {component}
  </li>
);
