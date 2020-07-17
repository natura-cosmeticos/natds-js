import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Snackbar from '../Components/Snackbar';

describe('Snackbar Component', () => {
  describe('Rendering', () => {
    test('should match to snapshot - Snackbar default', () => {
      const wrapper = renderer.create(<Snackbar open={false} />);

      expect(wrapper.toJSON()).toMatchSnapshot('Snackbar default snapshot');
    });
  });
});
