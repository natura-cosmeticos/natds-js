import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { expect } from 'chai';

import DrawerFooter from '../Components/DrawerFooter';

describe('DrawerFooter component', () => {
  test('should match snapshot - DrawerFooter Custom children', () => {
    const children = <div>some custom children</div>,
      component = renderer.create(<DrawerFooter>{children}</DrawerFooter>);

    expect(component).matchSnapshot('DrawerFooter custom children snapshot');
  });

  test('should match snapshot - DrawerFooter custom component', () => {
    const children = <div>some custom children</div>,
      component = renderer.create(<DrawerFooter component="section">{children}</DrawerFooter>);

    expect(component).matchSnapshot('DrawerFooter with custom component snapshot');
  });
});
