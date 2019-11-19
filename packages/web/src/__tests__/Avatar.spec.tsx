import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Avatar from '../Components/Avatar';
import { themes } from '@naturacosmeticos/natds-styles';

const label = 'A';

const MockedIcon = () => {
  return (
    <i />
  );
};

describe('Avatar component', () => {
  describe('rendering variants', () => {
    test('should match snapshot - Avatar (variant circle)', () => {
      const component = renderer.create(<Avatar variant="circle">{label}</Avatar>).toJSON();

      expect(component).to.matchSnapshot('Avatar circle snapshot');
    });

    test('should match snapshot - Avatar (variant rounded)', () => {
      const component = renderer.create(<Avatar variant="rounded">{label}</Avatar>).toJSON();

      expect(component).to.matchSnapshot('Avatar rounded snapshot');
    });

    test('should match snapshot - Avatar (variant square)', () => {
      const component = renderer.create(<Avatar variant="square">{label}</Avatar>).toJSON();

      expect(component).to.matchSnapshot('Avatar square snapshot');
    });
  });

  describe('rendering avatars types', () => {
    test('should match snapshot - Avatar with initials', () => {
      const component = renderer.create(<Avatar>AB</Avatar>).toJSON();

      expect(component).to.matchSnapshot('Avatar with initials snapshot');
    });

    test('should match snapshot - Avatar with icon', () => {
      const component = renderer.create(<Avatar><MockedIcon /></Avatar>).toJSON();

      expect(component).to.matchSnapshot('Avatar with icon snapshot');
    });

    test('should match snapshot - Avatar with image', () => {
      const image = 'source/image.png';
      const component = renderer.create(<Avatar src={image} />).toJSON();

      expect(component).to.matchSnapshot('Avatar with initials snapshot');
    });
  });

  describe('rendering avatars sizes', () => {
    test('should match snapshot - Avatar tiny', () => {
      const component = renderer.create(<Avatar size="tiny" />).toJSON();

      expect(component).to.matchSnapshot('Avatar tiny snapshot');
    });

    test('should match snapshot - Avatar small', () => {
      const component = renderer.create(<Avatar size="small" />).toJSON();

      expect(component).to.matchSnapshot('Avatar small snapshot');
    });

    test('should match snapshot - Avatar standard', () => {
      const component = renderer.create(<Avatar size="standard" />).toJSON();

      expect(component).to.matchSnapshot('Avatar standard snapshot');
    });

    test('should match snapshot - Avatar large', () => {
      const component = renderer.create(<Avatar size="large" />).toJSON();

      expect(component).to.matchSnapshot('Avatar large snapshot');
    });

    test('should match snapshot - Avatar xlarge', () => {
      const component = renderer.create(<Avatar size="xlarge" />).toJSON();

      expect(component).to.matchSnapshot('Avatar xlarge snapshot');
    });

    test('should not apply width and height if without theme', () => {
      const theme = {};
      const component = shallow(<Avatar theme={theme} />);

      expect(component.dive().prop('style')).to.equal(undefined);
    });

    test('should apply standard width and height if with theme', () => {
      const theme = themes.natura.light;
      const component = shallow(<Avatar theme={theme} />);

      expect(component.dive().prop('style')).to.deep.equal({
        width: `${theme.avatarSizes.standard}px`,
        height: `${theme.avatarSizes.standard}px`
      });
    });

    test('should apply chosen width and height if with theme', () => {
      const theme = themes.natura.light;
      const size = 'large';
      const component = shallow(<Avatar theme={theme} size={size} />);

      expect(component.dive().prop('style')).to.deep.equal({
        width: `${theme.avatarSizes[size]}px`,
        height: `${theme.avatarSizes[size]}px`
      });
    });
  });
});
