import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';

import Divider from '../Components/Divider';

describe('Divider component', () => {
  describe('rendering variants', () => {
    test('should match to snapshot - Variant FullWidth Default', () => {
      const component = renderer.create(<Divider />).toJSON();

      expect(component).matchSnapshot('Divider variant fullWidth default snapshot');
    });

    test('should match to snapshot - Variant Inset', () => {
      const component = renderer.create(<Divider variant="inset" />).toJSON();

      expect(component).matchSnapshot('Divider variant inset snapshot');
    });

    test('should match to snapshot - Variant Middle', () => {
      const component = renderer.create(<Divider variant="middle" />).toJSON();

      expect(component).matchSnapshot('Divider variant middle snapshot');
    });
  });
});
