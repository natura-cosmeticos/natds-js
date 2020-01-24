import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import DrawerHeader from '../Components/DrawerHeader';
import Typography from '../Components/Typography';
import Avatar from '../Components/Avatar';

describe('DrawerHeader component', () => {
  test('should match snapshot - DrawerHeader Avatar Image', () => {
    const children = "some_image";
    const component = renderer.create(<DrawerHeader avatarSrc={children} />);

    expect(component).matchSnapshot('DrawerHeader with Image Avatar snapshot');
  });

  test('should match snapshot - DrawerHeader Avatar Text', () => {
    const children = "some_text";
    const component = renderer.create(<DrawerHeader avatarChildren={children} />);

    expect(component).matchSnapshot('DrawerHeader with Text Avatar snapshot');
  });

  test('should match snapshot - DrawerHeader Title', () => {
    const children = "some_title";
    const component = renderer.create(<DrawerHeader primary={children} />);

    expect(component).matchSnapshot('DrawerHeader with Title snapshot');
  });

  test('should match snapshot - DrawerHeader Subtitle', () => {
    const children = "some_title";
    const component = renderer.create(<DrawerHeader secondary={children} />);

    expect(component).matchSnapshot('DrawerHeader with Subtitle snapshot');
  });

  test('should match snapshot - DrawerHeader Custom children', () => {
    const children = (<div>some custom children</div>);
    const component = renderer.create(<DrawerHeader children={children} />);

    expect(component).matchSnapshot('DrawerHeader with Custom children snapshot');
  });

  test('should custom children prevail over the properties', () => {
    const children = (<div className="custom">some custom children</div>);
    const primary = "primary text";
    const secondary = "secondary text";
    const avatarText = "avatar text";
    const component = shallow(<DrawerHeader
      children={children}
      avatarChildren={avatarText}
      primary={primary}
      secondary={secondary}
    />);

    expect(component).to.not.have.descendants(Avatar);
    expect(component).to.not.have.descendants(Typography);
    expect(component).to.have.descendants('.custom');
  });
});
