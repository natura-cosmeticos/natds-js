import * as React from 'react';
import { Platform } from 'react-native';
import { Chip } from '@natds/web';
import { Provider as PaperProvider } from 'react-native-paper';
import NativeChip from '@natds/mobile/dist/Components/Chip/Chip';

export default {
  title: 'Components|Chip',
  component: Chip
};

export const WithDeleteAction = () => (
  <Chip label="Some Label" onDelete={() => {}} />
);

export const Native = () => (
  <PaperProvider>
    <React.Fragment>
      {Platform.OS === 'web' ? (
        <style type="text/css">{`
    @font-face {
      font-family: 'MaterialCommunityIcons';
      src: url('${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}') format('truetype');
    }
  `}</style>
      ) : null}
      <NativeChip />
    </React.Fragment>
  </PaperProvider>
);
