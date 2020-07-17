import { makeDecorator } from "@storybook/addons";
import { withTests } from "@storybook/addon-jest";

import resultsWeb from "@packages/web/.jest-test-results.json";

export default makeDecorator({
  "name": "withJest",
  "parameterName": "jestImportPath",
  "wrapper": (getStory, context, { parameters }) => {
    const testResults = {
      "web": resultsWeb
    };

    const results = testResults[String(parameters)];

    return withTests({ results })(getStory, context);
  }
});
