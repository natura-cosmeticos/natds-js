import * as React from 'react';
import 'jest-styled-components';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy, assert } from 'sinon';
import MaskedInput from 'react-text-mask';

import { themes } from '@naturacosmeticos/natds-styles';
import Field, { FieldComponent } from '../Components/TextField/Field';
import PasswordReveal from '../Components/TextField/PasswordReveal';
import SearchClear from '../Components/TextField/SearchClear';

const getProps = (props: any = {}) => {
  const {
    id = 'field',
    label = 'Label',
    helpText = 'Assistive text',
    placeholder = 'Placeholder',
    type,
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
    type,
    state,
    disabled,
    required,
    theme,
    mask
  };
};

describe('TextField Field component', () => {
  test('should render single line input', () => {
    const props = getProps();
    const component = shallow(<Field {...props} />);

    expect(component.find('#field').prop('as')).to.equal('input');
  });

  test('should render single line masked input', () => {
    const props = getProps({ mask: ['v'] });
    const component = shallow(<Field {...props} />);

    expect(component.find('#field').prop('as')).to.equal(MaskedInput);
  });

  test('should render multiline input', () => {
    const props = getProps({ mask: ['v'] });
    const component = shallow(<Field {...props} multiline />);

    expect(component.find('#field').prop('as')).to.equal('textarea');
  });

  test('should render multiline input', () => {
    const props = getProps({ mask: ['v'] });
    const component = shallow(<Field {...props} multiline />);

    expect(component.find('#field').prop('as')).to.equal('textarea');
  });

  test('should reveal input value for password types', () => {
    const props = getProps({ type: 'password' });
    const component = mount(<Field {...props} />);
    const value = 'newpassword';

    component.find(FieldComponent).simulate('change', { target: { value } });
    component.find(PasswordReveal).simulate('click');

    expect(component.find(FieldComponent).prop('type')).to.equal('text');
    expect(component.find(PasswordReveal).prop('showing')).to.equal(true);

    component.find(PasswordReveal).simulate('click');

    expect(component.find(FieldComponent).prop('type')).to.equal('password');
    expect(component.find(PasswordReveal).prop('showing')).to.equal(false);
  });

  test('should clear input value for search types', () => {
    const props = getProps({ type: 'search' });
    const component = mount(<Field {...props} />);
    const value = 'new search';

    component.find(FieldComponent).simulate('change', { target: { value } });

    expect(component.find(FieldComponent).prop('value')).to.equal(value);

    component.find(SearchClear).simulate('click');

    expect(component.find(FieldComponent).prop('value')).to.equal('');
  });

  test('should clear input value for search types and call the callback function', () => {
    const props = getProps({ type: 'search' });
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

    component.find(FieldComponent).simulate('change', { target: { value } });

    expect(component.find(FieldComponent).prop('value')).to.equal(value);
  });

  test('should change input value and call the callback function', () => {
    const props = getProps();
    const onChange = spy();
    const value = 'new value';
    const event = { target: { value } };
    const component = shallow(<Field {...props} onChange={onChange} />);

    component.find(FieldComponent).simulate('change', event);

    expect(component.find(FieldComponent).prop('value')).to.equal(value);
    assert.calledWithExactly(onChange, event);
  });
});
