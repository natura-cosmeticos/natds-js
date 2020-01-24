import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';
import { spy, assert } from 'sinon';
import { mount } from 'enzyme';

import DrawerMenu, { IDrawerMenuSectionProps, DrawerMenuItem, DrawerMenuSection } from '../Components/DrawerMenu';
import ContextualBadge from '../Components/ContextualBadge';
import Collapse from '../Components/Collapse';

const listBasic = [
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  }
];

const listComplete = [
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
    badge: 'Novo',
    onSelect: () => null,
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
    opened: false,
    onToggle: () => null,
    badge: 'Novo',
    list: [
      {
        name: 'Menu Item',
        icon: 'outlined-action-love',
      },
      {
        name: 'Menu Item',
        icon: 'outlined-action-love',
        badge: 'Novo',
      }
    ]
  },
  {
    section: 'section'
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
    badge: 'Novo'
  },
];

describe('DrawerMenu component', () => {
  test('should match snapshot - DrawerMenu list', () => {
    const component = renderer.create(<DrawerMenu list={listComplete as [IDrawerMenuSectionProps]} />).toJSON();

    expect(component).matchSnapshot('DrawerMenu list snapshot');
  });

  test('should match snapshot - DrawerMenu custom component', () => {
    const component = renderer.create(<DrawerMenu list={listComplete as [IDrawerMenuSectionProps]} component="section" />).toJSON();

    expect(component).matchSnapshot('DrawerMenu custom component snapshot');
  });

  test('should match snapshot - DrawerMenu custom children', () => {
    const children = (<div>some custom children</div>);
    const component = renderer.create(<DrawerMenu list={listComplete as [IDrawerMenuSectionProps]} children={children} />).toJSON();

    expect(component).matchSnapshot('DrawerMenu custom children snapshot');
  });

  test('should render custom children', () => {
    const children = (<div className="custom">some custom children</div>);
    const component = mount(<DrawerMenu list={listBasic as [IDrawerMenuSectionProps]} children={children} />);

    expect(component).to.have.descendants('.custom');
    expect(component).to.not.have.descendants(DrawerMenuItem);
    expect(component).to.not.have.descendants(DrawerMenuSection);
  });

  test('should render list item', () => {
    const component = mount(<DrawerMenu list={listBasic as [IDrawerMenuSectionProps]} />);

    expect(component).to.have.descendants(DrawerMenuItem);
    expect(component).to.not.have.descendants(ContextualBadge);
    expect(component).to.not.have.descendants(DrawerMenuSection);
  });

  test('should render list item with badge', () => {
    const [listItem] = listBasic;
    const list = [{ ...listItem, badge: 'badge' }];
    const component = mount(<DrawerMenu list={list as [IDrawerMenuSectionProps]} />);

    expect(component).to.have.descendants(ContextualBadge);
    expect(component).to.not.have.descendants(DrawerMenuSection);
  });

  test('should render submenu item', () => {
    const component = mount(<DrawerMenu list={listComplete as [IDrawerMenuSectionProps]} />);

    expect(component).to.have.descendants(DrawerMenuSection);
  });

  test('should start with submenu opened', () => {
    const listItem = listComplete[2];
    const list = [{ ...listItem, opened: true }];
    const component = mount(<DrawerMenu list={list as [IDrawerMenuSectionProps]} />);

    expect(component.find(Collapse).prop('in')).to.equal(true);
  });

  test('should open submenu and call onToggle', () => {
    const onToggle = spy(listComplete[2], 'onToggle');
    const component = mount(<DrawerMenu list={listComplete as [IDrawerMenuSectionProps]} />);

    expect(component.find(Collapse).prop('in')).to.equal(false);

    component.find('li').at(2).simulate('click');

    expect(component.find(Collapse).prop('in')).to.equal(true);

    assert.calledOnce(onToggle);
  });

  test('should select a item and call onSelect', () => {
    const onSelect = spy(listComplete[1], 'onSelect');
    const component = mount(<DrawerMenu list={listComplete as [IDrawerMenuSectionProps]} />);

    component.find('li').at(1).simulate('click');

    assert.calledOnce(onSelect);
  });
});
