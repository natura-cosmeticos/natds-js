import React from 'react';
import { mount } from 'enzyme';

import { Typography } from '../index';

describe('Typography Component', () => {
  test('It should use the default variant and pass children forward', () => {
    const component = mount(<Typography>teste</Typography>);

    const materialTypography = component.find('ForwardRef(Typography)');

    expect(materialTypography.prop('variant')).toBe('body1');
    expect(materialTypography.prop('children')).toBe('teste');
  });

  test('It should use provided variant and pass children forward', () => {
    const component = mount(<Typography variant="h1">teste</Typography>);

    const materialTypography = component.find('ForwardRef(Typography)');

    expect(materialTypography.prop('variant')).toBe('h1');
    expect(materialTypography.prop('children')).toBe('teste');
  });
});
