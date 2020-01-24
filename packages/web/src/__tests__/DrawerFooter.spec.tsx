import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';

import DrawerFooter from '../Components/DrawerFooter';

describe('DrawerFooter component', () => {
  test('should match snapshot - DrawerFooter Custom children', () => {
    const children = (<div>some custom children</div>);
    const component = renderer.create(<DrawerFooter children={children} />);

    expect(component).matchSnapshot('DrawerFooter custom children snapshot');
  });

  test('should match snapshot - DrawerFooter custom component', () => {
    const children = (<div>some custom children</div>);
    const component = renderer.create(<DrawerFooter children={children} component="section" />);

    expect(component).matchSnapshot('DrawerFooter with custom component snapshot');
  });
});
