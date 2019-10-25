import * as React from 'react';

import './styles.scss';

interface ISpacingComponent {
  spacing: any;
}

export default function Spacing(props: ISpacingComponent) {
  return (
    <div className="spacing__container">
      <h4 className="spacing__title">Base = {props.spacing.spacingTiny}</h4>
      {Object.entries(props.spacing).map(spacingBlock)}
    </div>
  );
}

function spacingBlock([name, value]: any[], key: number) {
  const style = { height: `${value}px` };

  return (
    <div className="spacing__block" key={key}>
      <div className="spacing__box" style={style} />
      <h5 className="spacing__name">{value} - {name}</h5>
    </div>
  );
}
