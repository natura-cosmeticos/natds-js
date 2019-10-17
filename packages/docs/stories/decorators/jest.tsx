import { makeDecorator } from '@storybook/addons';
import { withTests } from '@storybook/addon-jest';

export default makeDecorator({
  name: 'withJest',
  parameterName: 'jestImportPath',
  wrapper: (getStory, context, { parameters }) => {
    const testResults = {
      web: require('../../../web/.jest-test-results.json'),
      mobile: require('../../../mobile/.jest-test-results.json')
    }

    const results = testResults[String(parameters)];

    return withTests({ results })(getStory, context);
  }
});
