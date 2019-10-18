import { makeDecorator } from '@storybook/addons';
import { withTests } from '@storybook/addon-jest';

import resultsWeb from '@packages/web/.jest-test-results.json';
import resultsMobile from '@packages/mobile/.jest-test-results.json';

export default makeDecorator({
  name: 'withJest',
  parameterName: 'jestImportPath',
  wrapper: (getStory, context, { parameters }) => {
    const testResults = {
      web: resultsWeb,
      mobile: resultsMobile
    };

    const results = testResults[String(parameters)];

    return withTests({ results })(getStory, context);
  }
});
