import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import DrawerBody, { DrawerBodyComponent, DrawerBodyScrollComponent } from '../Components/DrawerBody';

describe('DrawerBody component', () => {
  test('should match snapshot - DrawerBody children', () => {
    const children = (<div>some custom children</div>);
    const component = renderer.create(<DrawerBody children={children} />);

    expect(component).matchSnapshot('DrawerBody with children snapshot');
  });

  test('should match snapshot - DrawerBody custom component', () => {
    const children = (<div>some custom children</div>);
    const component = renderer.create(<DrawerBody children={children} component="section" />);

    expect(component).matchSnapshot('DrawerBody with custom component snapshot');
  });

  test('should custom children prevail over the properties', () => {
    const children = (<div className="custom">some custom children</div>);
    const component = mount(<DrawerBody children={children} />);
    const event: any = { target: { scrollTop: 10 } };

    component.find(DrawerBodyScrollComponent).simulate('scroll', event);

    expect(component.find(DrawerBodyComponent).prop('scrolled')).to.equal(true);
  });
});
