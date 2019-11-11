import * as React from 'react';
import tokensParams from '../shared';
import { NaturaLightComponent, NaturaDarkComponent } from './Natura';

export default {
  title: 'Design Tokens|Themes',
  parameters: {
    docs: {
      container: null,
      page: () => (
        <div>
          <NaturaLightComponent />
          <NaturaDarkComponent />
        </div>
      )
    },
    ...tokensParams
  }
};

export const NaturaLight = () => (
  <NaturaLightComponent />
);

export const NaturaDark = () => (
  <NaturaDarkComponent />
);
