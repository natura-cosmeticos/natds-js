import * as React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy, assert } from 'sinon';

import { themes } from '@naturacosmeticos/natds-styles';
import PasswordReveal from '../Components/TextField/PasswordReveal';

const getProps = (props: any = {}) => {
  const {
    theme = themes.natura.light,
    showing = false,
    onTogglePasswordReveal = spy(),
    showPasswordIcon = () => (<i className="show" />),
    hidePasswordIcon = () => (<i className="hide" />)
  } = props;

  return {
    theme,
    showing,
    onTogglePasswordReveal,
    showPasswordIcon,
    hidePasswordIcon
  };
};

describe('TextField PasswordReveal component', () => {
  test('should render received showPasswordIcon', () => {
    const props = getProps({ showing: false });
    const component = shallow(<PasswordReveal {...props} />);
    const icon = shallow(props.showPasswordIcon());

    expect(component.html()).to.be.equal(icon.html());
  });

  test('should render received hidePasswordIcon', () => {
    const props = getProps({ showing: true });
    const component = shallow(<PasswordReveal {...props} />);
    const icon = shallow(props.hidePasswordIcon());

    expect(component.html()).to.be.equal(icon.html());
  });

  test('should render default showPasswordIcon', () => {
    const props = getProps({ showing: false });
    const component = shallow(<PasswordReveal {...props} showPasswordIcon={undefined} hidePasswordIcon={undefined} />);

    expect(component.html()).to.contain('svg');
  });

  test('should render default hidePasswordIcon', () => {
    const props = getProps({ showing: true });
    const component = shallow(<PasswordReveal {...props} showPasswordIcon={undefined} hidePasswordIcon={undefined} />);

    expect(component.html()).to.contain('svg');
  });

  test('should call onTogglePasswordReveal callback after click', () => {
    const props = getProps();
    const component = shallow(<PasswordReveal {...props} />);

    component.simulate('click');

    assert.calledOnce(props.onTogglePasswordReveal);
  });
});
