import * as React from 'react';

import './styles.scss';
import { ISpacing } from '@naturacosmeticos/natds-styles';

interface ISpacingPaddingComponent {
  spacing: any;
}

function buildLists(spacing: ISpacing) {
  const {
    spacingMicro,
    spacingTiny,
    spacingSmall,
    spacingStandard,
    spacingSemi,
    spacingLarge,
    spacingHuge
  } = spacing;

  const paddingFull = [
    {
      name: 'p={spacingHuge}',
      border: `${spacingHuge}px`,
      value: spacingHuge
    },
    {
      name: 'p={spacingLarge}',
      border: `${spacingLarge}px`,
      value: spacingLarge
    },
    {
      name: 'p={spacingSemi}',
      border: `${spacingSemi}px`,
      value: spacingSemi
    },
    {
      name: 'p={spacingStandard}',
      border: `${spacingStandard}px`,
      value: spacingStandard
    },
    {
      name: 'p={spacingSmall}',
      border: `${spacingSmall}px`,
      value: spacingSmall
    },
    {
      name: 'p={spacingTiny}',
      border: `${spacingTiny}px`,
      value: spacingTiny
    },
    {
      name: 'p={spacingMicro}',
      border: `${spacingMicro}px`,
      value: spacingMicro
    }
  ];

  const paddingSingle = [
    {
      name: 'pt={spacingHuge}',
      border: `${spacingHuge}px 0 0`,
      value: spacingHuge
    },
    {
      name: 'pr={spacingLarge}',
      border: `0 ${spacingLarge}px 0 0`,
      value: spacingLarge
    },
    {
      name: 'pb={spacingSemi}',
      border: `0 0 ${spacingSemi}px`,
      value: spacingSemi
    },
    {
      name: 'pl={spacingStandard}',
      border: `0 0 0 ${spacingStandard}px`,
      value: spacingStandard
    },
    {
      name: 'pt={spacingSmall}',
      border: `${spacingSmall}px 0 0`,
      value: spacingSmall
    },
    {
      name: 'pr={spacingTiny}',
      border: `0 ${spacingTiny}px 0 0`,
      value: spacingTiny
    },
    {
      name: 'pb={spacingMicro}',
      border: `0 0 ${spacingMicro}px`,
      value: spacingMicro
    },
    {
      name: 'py={spacingSemi}',
      border: `${spacingSemi}px 0`,
      value: spacingSemi
    },
    {
      name: 'px={spacingSmall}',
      border: `0 ${spacingSmall}px`,
      value: spacingSmall
    }
  ];

  return {
    paddingFull,
    paddingSingle
  };
}

export default function SpacingPadding(props: ISpacingPaddingComponent) {
  const { paddingFull, paddingSingle } = buildLists(props.spacing);

  return (
    <div className="spacing__padding">
      <div className="spacing__padding__list">
        {paddingFull.map(SpacingPaddingBlock)}
      </div>
      <div className="spacing__padding__list">
        {paddingSingle.map(SpacingPaddingBlock)}
      </div>
    </div>
  );
}

function SpacingPaddingBlock({ name, value, border }: { name: string, value: number, border: string }, key: number) {
  return (
    <div className="spacing__padding__block" key={key}>
      <div className="spacing__padding__box" style={{ borderWidth: border }}>text</div>
      <h5 className="spacing__padding__name">{name}</h5>
    </div>
  );
}
