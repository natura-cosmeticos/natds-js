import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';

import Avatar from '../Components/Avatar';

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

  describe('rendering avatars', () => {
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
});
