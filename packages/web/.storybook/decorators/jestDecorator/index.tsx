import { makeDecorator } from "@storybook/addons";
import { withTests } from "@storybook/addon-jest";

// @ts-ignore
import resultsWeb from "../../../.jest-test-results.json";

export const jestDecorator = makeDecorator({
  name: "withJest",
  parameterName: "jestImportPath",
  wrapper: (getStory, context, { parameters }) => {
    const testResults = {
      web: resultsWeb,
    };

    const results = testResults[String(parameters)];

    return withTests({ results })(getStory, context);
  },
});
