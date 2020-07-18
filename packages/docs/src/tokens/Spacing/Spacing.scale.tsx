import * as React from "react";

import "./styles.scss";

interface ISpacingScaleComponent {
  spacing: any;
}

const SpacingScale = (props: ISpacingScaleComponent) => <div className="spacing__scale">
  <h4 className="spacing__scale__title">Base = {props.spacing.spacingTiny}</h4>
  {Object.entries(props.spacing).map(spacingBlock)}
</div>;

export default SpacingScale;

const spacingBlock = ([
  name, value]: any[
], key: number) => {
  const style = { height: `${value}px` };

  return (
    <div className="spacing__scale__block" key={key}>
      <div className="spacing__scale__box" style={style} />
      <h5 className="spacing__scale__name">{value} - {name}</h5>
    </div>
  );
};
