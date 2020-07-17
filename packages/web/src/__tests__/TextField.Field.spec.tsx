import 'jest-styled-components';
import * as React from 'react';

import Field, { FieldComponent } from '../Components/TextField/Field';
import { assert, spy } from 'sinon';
import { mount, shallow } from 'enzyme';

import MaskedInput from 'react-text-mask';
import PasswordReveal from '../Components/TextField/PasswordReveal';
import SearchClear from '../Components/TextField/SearchClear';

import { expect } from 'chai';
import { themes } from '@naturacosmeticos/natds-styles';

const getProps = (props: any = {}) => {
  const {
    disabled,
    helpText = 'Assistive text',
    id = 'field',
    label = 'Label',
    mask,
    placeholder = 'Placeholder',
    required,
    state,
    theme = themes.natura.light,
    type
  } = props;

  return {
    disabled,
    helpText,
    id,
    label,
    mask,
    placeholder,
    required,
    state,
    theme,
    type
  };
};

describe('TextField Field component', () => {
  test('should render single line input', () => {
    const props = getProps();
    const component = shallow(<Field {...props} />);

    expect(component.find('#field').prop('as')).to.equal('input');
  });

  test('should render single line masked input', () => {
    const props = getProps({ 'mask': ['v'] });
    const component = shallow(<Field {...props} />);

    expect(component.find('#field').prop('as')).to.equal(MaskedInput);
  });

  test('should render multiline input', () => {
    const props = getProps({ 'mask': ['v'] });
    const component = shallow(<Field {...props} multiline />);

    expect(component.find('#field').prop('as')).to.equal('textarea');
  });

  test('should render multiline input', () => {
    const props = getProps({ 'mask': ['v'] });
    const component = shallow(<Field {...props} multiline />);

    expect(component.find('#field').prop('as')).to.equal('textarea');
  });

  test('should reveal input value for password types', () => {
    const props = getProps({ 'type': 'password' });
    const component = mount(<Field {...props} />);
    const value = 'newpassword';

    component.find(FieldComponent).simulate('change', { 'target': { value } });
    component.find(PasswordReveal).simulate('click');

    expect(component.find(FieldComponent).prop('type')).to.equal('text');
    expect(component.find(PasswordReveal).prop('showing')).to.equal(true);

    component.find(PasswordReveal).simulate('click');

    expect(component.find(FieldComponent).prop('type')).to.equal('password');
    expect(component.find(PasswordReveal).prop('showing')).to.equal(false);
  });

  test('should clear input value for search types', () => {
    const props = getProps({ 'type': 'search' });
    const component = mount(<Field {...props} />);
    const value = 'new search';

    component.find(FieldComponent).simulate('change', { 'target': { value } });

    expect(component.find(FieldComponent).prop('value')).to.equal(value);

    component.find(SearchClear).simulate('click');

    expect(component.find(FieldComponent).prop('value')).to.equal('');
  });

  test('should clear input value for search types and call the callback function', () => {
    const props = getProps({ 'type': 'search' });
    const onChange = spy();
    const value = 'new search';
    const component = mount(<Field {...props} onChange={onChange} value={value} />);

    component.find(SearchClear).simulate('click');

    assert.calledOnce(onChange);
  });

  test('should change input value', () => {
    const props = getProps();
    const component = shallow(<Field {...props} />);
    const value = 'new value';

    component.find(FieldComponent).simulate('change', { 'target': { value } });

    expect(component.find(FieldComponent).prop('value')).to.equal(value);
  });

  test('should change input value and call the callback function', () => {
    const props = getProps();
    const onChange = spy();
    const value = 'new value';
    const event = { 'target': { value } };
    const component = shallow(<Field {...props} onChange={onChange} />);

    component.find(FieldComponent).simulate('change', event);

    expect(component.find(FieldComponent).prop('value')).to.equal(value);
    assert.calledWithExactly(onChange, event);
  });
});
