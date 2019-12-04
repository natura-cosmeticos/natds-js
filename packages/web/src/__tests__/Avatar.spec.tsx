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
    let theme:any;

    beforeEach(() => {
      theme = themes.natura.light;
    });

    test('should match snapshot - Avatar Size tiny', () => {
      const component = renderer.create(<Avatar size="tiny" theme={theme} />).toJSON();

      expect(component).to.matchSnapshot('Avatar Size tiny snapshot');
    });

    test('should match snapshot - Avatar Size small', () => {
      const component = renderer.create(<Avatar size="small" theme={theme} />).toJSON();

      expect(component).to.matchSnapshot('Avatar Size small snapshot');
    });

    test('should match snapshot - Avatar Size standard', () => {
      const component = renderer.create(<Avatar size="standard" theme={theme} />).toJSON();

      expect(component).to.matchSnapshot('Avatar Size standard snapshot');
    });

    test('should match snapshot - Avatar Size large', () => {
      const component = renderer.create(<Avatar size="large" theme={theme} />).toJSON();

      expect(component).to.matchSnapshot('Avatar Size large snapshot');
    });

    test('should match snapshot - Avatar Size xlarge', () => {
      const component = renderer.create(<Avatar size="xlarge" theme={theme} />).toJSON();

      expect(component).to.matchSnapshot('Avatar Size xlarge snapshot');
    });

    test('should not apply width and height if without theme', () => {
      const component = shallow(<Avatar theme={{}} />);

      expect(component.dive().prop('style')).to.deep.equal({});
    });

    test('should apply standard size as default', () => {
      const { standard: { size, fontSize } } = theme.avatarSizes;
      const component = shallow(<Avatar theme={theme} />);

      expect(component.dive().prop('style')).to.deep.include({
        width: `${size}px`,
        height: `${size}px`,
        fontSize
      });
    });
  });

  describe('rendering avatars colors', () => {
    let theme:any;

    beforeEach(() => {
      theme = themes.natura.light;
    });

    test('should match snapshot - Avatar Color primary', () => {
      const component = renderer.create(<Avatar theme={theme} color="primary" />).toJSON();

      expect(component).to.matchSnapshot('Avatar Color primary snapshot');
    });

    test('should match snapshot - Avatar Color secondary', () => {
      const component = renderer.create(<Avatar theme={theme} color="secondary" />).toJSON();

      expect(component).to.matchSnapshot('Avatar Color secondary snapshot');
    });

    test('should match snapshot - Avatar Color default', () => {
      const component = renderer.create(<Avatar theme={theme} />).toJSON();

      expect(component).to.matchSnapshot('Avatar Color default snapshot');
    });

    test('should not apply background if without theme', () => {
      const component = shallow(<Avatar theme={{}} />);

      expect(component.dive().prop('style')).to.deep.equal({});
    });

    test('should apply primary color as default', () => {
      const component = shallow(<Avatar theme={theme} />);

      expect(component.dive().prop('style')).to.deep.include({
        background: theme.palette.primary.main
      });
    });
  });
});
