import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import { AppBarHighlight } from './AppBarHighlight'

describe('AppBarHighlight', () => {
  test("should match snapshot - default props", () => {
    const testRenderer = TestRenderer.create(<AppBarHighlight>"any children"</AppBarHighlight>)

    expect(testRenderer).toMatchSnapshot()
  })
});
