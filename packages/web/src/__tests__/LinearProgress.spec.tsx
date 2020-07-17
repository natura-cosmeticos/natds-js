import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import renderer from 'react-test-renderer';

import LinearProgress from '../Components/LinearProgress';

describe('Circular Progress components', () => {
  describe('rendering variants', () => {
    test('should match to snapshot - empty LinearProgress', () => {
      const component = mount(<LinearProgress />);

      expect(component).matchSnapshot('LinearProgress empty snapshot');
    });

    test('should match snapshot - with variant indeterminate', () => {
      const component = renderer.
        create(<LinearProgress variant="indeterminate" />).
        toJSON();

      expect(component).to.matchSnapshot('With variant indeterminate snapshot');
    });

    test('should match snapshot - with variant determinate', () => {
      const component = renderer.
        create(<LinearProgress variant="determinate" value={70} />).
        toJSON();

      expect(component).to.matchSnapshot('With variant determinate snapshot');
    });

    test('should match snapshot - with variant Buffer', () => {
      const component = renderer.
        create(<LinearProgress variant="buffer" value={50} valueBuffer={70} />).
        toJSON();

      expect(component).to.matchSnapshot('With variant buffer snapshot');
    });

    test('should match snapshot - with variant query', () => {
      const component = renderer.
        create(<LinearProgress variant="query" />).
        toJSON();

      expect(component).to.matchSnapshot('With variant query snapshot');
    });
  });
});
