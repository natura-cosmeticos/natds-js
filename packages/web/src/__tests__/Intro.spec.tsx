import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';

import { Intro, Icon } from '..';
import { themes } from '@naturacosmeticos/natds-styles';

const variants: any = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  body1: 'body1',
  body2: 'body2',
  caption: 'caption',
  button: 'button',
  overline: 'overline',
  srOnly: 'srOnly',
  inherit: 'inherit'
};

const theme = themes.natura.light;

const TitleWithIcon = () => (
  <>
    <Icon name="filled-action-add" size="tiny" />
    title
  </>
);

describe('Intro component', () => {
  test(`should match snapshot - Intro with title and without detail`, () => {
    const component = renderer.create(<Intro title="title" theme={theme} />).toJSON();
    expect(component).matchSnapshot(`Intro snapshot - with title and without detail`);
  });

  test(`should match snapshot - Intro with title and detail`, () => {
    const component = renderer.create(<Intro title="title" detail="detail" theme={theme} />).toJSON();
    expect(component).matchSnapshot(`Intro snapshot - with title and detail`);
  });

  test(`should match snapshot - Intro with title and icon`, () => {
    const component = renderer.create(<Intro title={<TitleWithIcon />} theme={theme} />).toJSON();
    expect(component).matchSnapshot(`Intro snapshot - with title and icon`);
  });

  Object.keys(variants).forEach((variant: string) => {
    test(`should match snapshot - Any valid Intro with ${variant} titleVariant`, () => {
      const component = renderer.create(<Intro titleVariant={variant as any} title="title" theme={theme} />).toJSON();
      expect(component).matchSnapshot(`Intro snapshot - with ${variant} titleVariant`);
    });

    test(`should match snapshot - Any valid Intro with ${variant} detailVariant`, () => {
      const component = renderer.create(<Intro detail="detail" detailVariant={variant as any} title="title" theme={theme} />).toJSON();
      expect(component).matchSnapshot(`Intro snapshot - with ${variant} detailVariant`);
    });
  });
});
