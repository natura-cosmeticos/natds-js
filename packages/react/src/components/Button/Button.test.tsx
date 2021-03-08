import * as React from 'react';
import * as TestRenderer from 'react-test-renderer'
import Button from ".";

describe('Button component', () => {
  it('should render correctly', () => {
    const button = TestRenderer.create(<Button label="button" />)

    expect(button).toMatchSnapshot()
  })
})
