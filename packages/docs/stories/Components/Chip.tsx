import * as React from 'react';
import { Platform } from 'react-native';
import { Chip } from '@natds/web';
import { Chip as NativeChip } from '@natds/mobile';

export default {
  title: 'Components|Chip',
  component: Chip
};

export const WithDeleteAction = () => (
  <Chip label="Some Label" onDelete={() => {}} />
);

export const Native = () => (
  <>
    {Platform.OS === 'web' ? (
      <style type="text/css">{`
    @font-face {
      font-family: 'MaterialIcons';
      src: url('${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}') format('truetype');
    }
  `}</style>
    ) : null}
    <NativeChip
      children="Some Native Label"
      onClose={() => {}}
      onPress={() => {}}
    />
  </>
);
