import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import TextField from '../Components/TextField';
import { themes } from '@naturacosmeticos/natds-styles';

function getProps(props: any = {}) {
  const {
    id = 'field',
    label = 'Label',
    helpText = 'Assistive text',
    placeholder = 'Placeholder',
    status,
    disabled,
    required,
    theme = themes.natura.light
  } = props;

  return {
    id,
    label,
    helpText,
    placeholder,
    status,
    disabled,
    required,
    theme
  };
}

describe('TextField component', () => {
  describe('rendering states', () => {
    test('should match snapshot - TextField (default)', () => {
      const component = renderer.create(<TextField {...getProps()} />).toJSON();

      expect(component).to.matchSnapshot('TextField default snapshot');
    });

    test('should match snapshot - TextField (required)', () => {
      const component = renderer.create(<TextField {...getProps({ required: true })} />).toJSON();

      expect(component).to.matchSnapshot('TextField required snapshot');
    });

    test('should match snapshot - TextField (disabled)', () => {
      const component = renderer.create(<TextField {...getProps({ disabled: true })} />).toJSON();

      expect(component).to.matchSnapshot('TextField disabled snapshot');
    });

    test('should match snapshot - TextField (filled)', () => {
      const component = renderer.create(<TextField {...getProps()} value="some value" />).toJSON();

      expect(component).to.matchSnapshot('TextField filled snapshot');
    });

    test('should match snapshot - TextField (success)', () => {
      const component = renderer.create(<TextField {...getProps({ status: 'success' })} />).toJSON();

      expect(component).to.matchSnapshot('TextField success snapshot');
    });

    test('should match snapshot - TextField (error)', () => {
      const component = renderer.create(<TextField {...getProps({ status: 'error' })} />).toJSON();

      expect(component).to.matchSnapshot('TextField error snapshot');
    });

    test('should match snapshot - TextField (theme change)', () => {
      const component = renderer.create(<TextField {...getProps({ theme: themes.natura.dark })} />).toJSON();

      expect(component).to.matchSnapshot('TextField theme change snapshot');
    });

    test('should match snapshot - TextField (property forwarded)', () => {
      const component = renderer.create(<TextField {...getProps()} type="password" />).toJSON();

      expect(component).to.matchSnapshot('TextField property forwarded snapshot');
    });

    test('should match snapshot - TextField (multiline)', () => {
      const component = renderer.create(<TextField {...getProps()} multiline />).toJSON();

      expect(component).to.matchSnapshot('TextField multiline snapshot');
    });

    test('should match snapshot - TextField (default with empty theme)', () => {
      const component = renderer.create(<TextField {...getProps({ theme: {} })} />).toJSON();

      expect(component).to.matchSnapshot('TextField default with empty theme snapshot');
    });
  });
});
