import * as React from "react";

import "./styles.scss";

interface ISpacingMarginComponent {
  spacing: any;
}

const buildLists = (spacing: any) => {
  const {
    spacingMicro,
    spacingTiny,
    spacingSmall,
    spacingStandard,
    spacingSemi,
    spacingLarge,
    spacingHuge
  } = spacing;

  const marginFull = [
    {
      "name": "m={spacingHuge}",
      "margin": `${spacingHuge}px`,
      "value": spacingHuge,
      "type": "big"
    },
    {
      "name": "m={spacingTiny}",
      "margin": `${spacingTiny}px`,
      "value": spacingTiny,
      "type": "big"
    }
  ];

  const marginSingle = [
    {
      "name": "mt={spacingHuge}",
      "margin": `${spacingHuge}px 0 0`,
      "value": spacingHuge
    },
    {
      "name": "mr={spacingLarge}",
      "margin": `0 ${spacingLarge}px 0 0`,
      "value": spacingLarge
    },
    {
      "name": "mb={spacingSemi}",
      "margin": `0 0 ${spacingSemi}px`,
      "value": spacingSemi
    },
    {
      "name": "ml={spacingStandard}",
      "margin": `0 0 0 ${spacingStandard}px`,
      "value": spacingStandard
    },
    {
      "name": "mt={spacingSmall}",
      "margin": `${spacingSmall}px 0 0`,
      "value": spacingSmall
    },
    {
      "name": "mr={spacingTiny}",
      "margin": `0 ${spacingTiny}px 0 0`,
      "value": spacingTiny
    },
    {
      "name": "mb={spacingMicro}",
      "margin": `0 0 ${spacingMicro}px`,
      "value": spacingMicro
    },
    {
      "name": "my={spacingStandard}",
      "margin": `${spacingStandard}px 0`,
      "value": spacingStandard
    },
    {
      "name": "mx={spacingSmall}",
      "margin": `0 ${spacingSmall}px`,
      "value": spacingSmall
    }
  ];

  return {
    marginFull,
    marginSingle
  };
};

const SpacingMargin = (props: ISpacingMarginComponent) => {
  const { marginFull, marginSingle } = buildLists(props.spacing);

  return (
    <div className="spacing__margin">
      <div className="spacing__margin__list">
        {marginFull.map(SpacingMarginBlock)}
      </div>
      <div className="spacing__margin__list">
        {marginSingle.map(SpacingMarginBlock)}
      </div>
    </div>
  );
};

export default SpacingMargin;

const SpacingMarginBlock = (
  { name, value, margin, type = "small" }:
  { name: string, value: number, margin: string, type: string }, key: number
) => <div className={`spacing__margin__block spacing__margin__block--${type}`} key={key}>
  <div className="spacing__margin__box">
    <div className="spacing__margin__box__content" style={{ margin }} />
  </div>
  <h5 className="spacing__margin__name">{name}</h5>
</div>;

