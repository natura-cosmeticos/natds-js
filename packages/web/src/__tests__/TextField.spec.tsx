import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { shallow } from 'enzyme';

import TextField from '../Components/TextField';
import { themes } from '@naturacosmeticos/natds-styles';

function getProps(props: any = {}) {
  const {
    id = 'field',
    label = 'Label',
    helpText = 'Assistive text',
    placeholder = 'Placeholder',
    state,
    disabled,
    required,
    theme = themes.natura.light,
    mask
  } = props;

  return {
    id,
    label,
    helpText,
    placeholder,
    state,
    disabled,
    required,
    theme,
    mask
  };
}

describe('TextField component', () => {
  describe('rendering state', () => {
    test('should match snapshot - TextField (default)', () => {
      const component = renderer.create(<TextField {...getProps()} />).toJSON();

      expect(component).to.matchSnapshot('TextField default snapshot');
    });

    test('should match snapshot - TextField (default without placeholder)', () => {
      const props = getProps();
      delete props.placeholder;

      const component = renderer.create(<TextField {...props} />).toJSON();

      expect(component).to.matchSnapshot('TextField default without placeholder snapshot');
    });

    test('should match snapshot - TextField (default hover)', () => {
      const component = shallow(<TextField {...getProps()} />);

      component.find('#field').simulate('mouseover');

      expect(component).to.matchSnapshot('TextField default hover snapshot');
    });

    test('should match snapshot - TextField (default focus)', () => {
      const component = shallow(<TextField {...getProps()} />);

      component.find('#field').simulate('focus');

      expect(component).to.matchSnapshot('TextField default focus snapshot');
    });

    test('should match snapshot - TextField (filled)', () => {
      const component = renderer.create(<TextField {...getProps()} value="some value" />).toJSON();

      expect(component).to.matchSnapshot('TextField filled snapshot');
    });

    test('should match snapshot - TextField (filled hover)', () => {
      const component = shallow(<TextField {...getProps()} value="some value" />);

      component.find('#field').simulate('mouseover');

      expect(component).to.matchSnapshot('TextField filled hover snapshot');
    });

    test('should match snapshot - TextField (filled focus)', () => {
      const component = shallow(<TextField {...getProps()} value="some value" />);

      component.find('#field').simulate('focus');

      expect(component).to.matchSnapshot('TextField filled focus snapshot');
    });

    test('should match snapshot - TextField (success)', () => {
      const component = renderer.create(<TextField {...getProps({ state: 'success' })} />).toJSON();

      expect(component).to.matchSnapshot('TextField success snapshot');
    });

    test('should match snapshot - TextField (success hover)', () => {
      const component = shallow(<TextField {...getProps({ state: 'success' })} />);

      component.find('#field').simulate('mouseover');

      expect(component).to.matchSnapshot('TextField success hover snapshot');
    });

    test('should match snapshot - TextField (success focus)', () => {
      const component = shallow(<TextField {...getProps({ state: 'success' })} />);

      component.find('#field').simulate('focus');

      expect(component).to.matchSnapshot('TextField success focus snapshot');
    });

    test('should match snapshot - TextField (error)', () => {
      const component = renderer.create(<TextField {...getProps({ state: 'error' })} />).toJSON();

      expect(component).to.matchSnapshot('TextField error snapshot');
    });

    test('should match snapshot - TextField (error hover)', () => {
      const component = shallow(<TextField {...getProps({ state: 'error' })} />);

      component.find('#field').simulate('mouseover');

      expect(component).to.matchSnapshot('TextField error hover snapshot');
    });

    test('should match snapshot - TextField (error focus)', () => {
      const component = shallow(<TextField {...getProps({ state: 'error' })} />);

      component.find('#field').simulate('focus');

      expect(component).to.matchSnapshot('TextField error focus snapshot');
    });

    test('should match snapshot - TextField (required)', () => {
      const component = renderer.create(<TextField {...getProps({ required: true })} />).toJSON();

      expect(component).to.matchSnapshot('TextField required snapshot');
    });

    test('should match snapshot - TextField (disabled)', () => {
      const component = renderer.create(<TextField {...getProps({ disabled: true })} />).toJSON();

      expect(component).to.matchSnapshot('TextField disabled snapshot');
    });

    test('should match snapshot - TextField (disabled hover)', () => {
      const component = shallow(<TextField {...getProps({ disabled: true })} />);

      component.find('#field').simulate('mouseover');

      expect(component).to.matchSnapshot('TextField disabled hover snapshot');
    });

    test('should match snapshot - TextField (disabled focus)', () => {
      const component = shallow(<TextField {...getProps({ disabled: true })} />);

      component.find('#field').simulate('focus');

      expect(component).to.matchSnapshot('TextField disabled focus snapshot');
    });

    test('should match snapshot - TextField (multiline)', () => {
      const component = renderer.create(<TextField {...getProps()} multiline />).toJSON();

      expect(component).to.matchSnapshot('TextField multiline snapshot');
    });

    test('should match snapshot - TextField (mask)', () => {
      const mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      const component = renderer.create(<TextField {...getProps({ mask })} />).toJSON();

      expect(component).to.matchSnapshot('TextField mask snapshot');
    });

    test('should match snapshot - TextField (theme change)', () => {
      const component = renderer.create(<TextField {...getProps({ theme: themes.natura.dark })} />).toJSON();

      expect(component).to.matchSnapshot('TextField theme change snapshot');
    });

    test('should match snapshot - TextField (property forwarded)', () => {
      const component = renderer.create(<TextField {...getProps()} type="password" />).toJSON();

      expect(component).to.matchSnapshot('TextField property forwarded snapshot');
    });

    test('should match snapshot - TextField (default with empty theme)', () => {
      const component = renderer.create(<TextField {...getProps({ theme: {} })} />).toJSON();

      expect(component).to.matchSnapshot('TextField default with empty theme snapshot');
    });
  });
});
