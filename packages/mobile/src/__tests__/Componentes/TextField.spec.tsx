import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { TextField } from '../../index';
import Provider from '../../Provider';


describe('TextField', () => {
  describe('rendering', () => {
    test('should match to snapshot - Default TextField', () => {
      const component = renderer
          .create(<TextField />)
          .toJSON();

      expect(component).toMatchSnapshot('Default TextField snapshot');
    });
    test('should match to snapshot - With label', () => {
      const component = renderer
          .create(<TextField label="Mock Label"/>)
          .toJSON();

      expect(component).toMatchSnapshot('With label TextField snapshot');
    });
    test('should match to snapshot - With help text', () => {
      const component = renderer
          .create(<TextField helpText="Mock Help Text"/>)
          .toJSON();

      expect(component).toMatchSnapshot('With help text TextField snapshot');
    });
    test('should match to snapshot - Required', () => {
      const component = renderer
          .create(<TextField required={true}/>)
          .toJSON();

      expect(component).toMatchSnapshot('Required TextField snapshot');
    });
    test('should match to snapshot - Sucess status', () => {
      const component = renderer
          .create(<TextField status="success"/>)
          .toJSON();

      expect(component).toMatchSnapshot('Sucess status TextField snapshot');
    });
    test('should match to snapshot - Error status', () => {
      const component = renderer
          .create(<TextField status="error"/>)
          .toJSON();

      expect(component).toMatchSnapshot('Error status TextField snapshot');
    });
    test('should match to snapshot - With icon', () => {
      const component = renderer
          .create(<TextField icon="eye"/>)
          .toJSON();

      expect(component).toMatchSnapshot('With icon TextField snapshot');
    });
    test('should match to snapshot - With Provider', () => {
      const component = renderer
          .create(<Provider><TextField /></Provider>)
          .toJSON();

      expect(component).toMatchSnapshot('With Provider TextField snapshot');
    });
    test('should match to snapshot - Placeholder Text Color', () => {
      const component = renderer
          .create(<Provider><TextField placeholderTextColor={"#FFFFFF"} /></Provider>)
          .toJSON();

      expect(component).toMatchSnapshot('Placeholder Text Color TextField snapshot');
    });
  });
});
