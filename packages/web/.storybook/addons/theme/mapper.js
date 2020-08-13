import {PARAM_KEY} from "./shared";
import {parseTheme} from "./parseTheme";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapper = ({api, state}) => {
  const story = state.storiesHash[state.storyId];

  /**
   * @todo refactor(docs): fix unexpected mix of '&&' and '||'
   */
  // eslint-disable-next-line no-mixed-operators
  const {themes = {}} = story && api.getParameters(story.id, PARAM_KEY) || {};

  return {items: parseTheme(themes)};
};
