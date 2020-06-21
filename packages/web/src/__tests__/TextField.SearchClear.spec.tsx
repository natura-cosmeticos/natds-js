import * as React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy, assert } from 'sinon';

import { themes } from '@naturacosmeticos/natds-styles';
import SearchClear from '../Components/TextField/SearchClear';

const getProps = (props: any = {}) => {
  const {
    theme = themes.natura.light,
    onClearSearch = spy(),
    searchIcon = () => (<i />)
  } = props;

  return {
    theme,
    searchIcon,
    onClearSearch
  };
};

describe('TextField SearchClear component', () => {
  test('should render received Icon', () => {
    const props = getProps();
    const component = shallow(<SearchClear {...props} />);
    const icon = shallow(props.searchIcon());

    expect(component.html()).to.be.equal(icon.html());
  });

  test('should render default Icon', () => {
    const props = getProps();
    const component = shallow(<SearchClear {...props} searchIcon={undefined} />);

    expect(component.html()).to.contain('svg');
  });

  test('should call onClearSearch callback after click', () => {
    const props = getProps();
    const component = shallow(<SearchClear {...props} />);

    component.simulate('click');

    assert.calledOnce(props.onClearSearch);
  });
});
