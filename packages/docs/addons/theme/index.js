import React, { useEffect, Fragment } from 'react';
import { useAddonState, Consumer } from '@storybook/api';
import { TabButton, WithTooltip, TooltipLinkList } from '@storybook/components';

import { PANEL_ID, CHANGE, PARAM_KEY } from './shared';
import { STORY_CHANGED } from '@storybook/core-events';

import './styles.css';

const DEFAULT_THEME = {
  name: 'natura',
  type: 'light'
};

function parseTheme(themes) {
  return Object.entries(themes).reduce((accum, [name, variants]) => {
    Object.entries(variants).forEach(function ([type]) {
      accum.push({ name, type })
    })

    return accum;
  }, []);
}

const getDisplayedItems = (list, onChange, selectedItem) => {
  if (!list.length) {
    return [];
  }

  return [
    ...list.map((params) =>
      createBackgroundSelectorItem(params, onChange, selectedItem)
    ),
  ];
};

const createBackgroundSelectorItem = ({ name, type }, onChange, selectedItem) => ({
  id: `${name} - ${type}`,
  title: `${name} - ${type}`,
  active: selectedItem.name === name && selectedItem.type === type,
  onClick: () => onChange({ name, type })
});

const mapper = ({ api, state }) => {
  const story = state.storiesHash[state.storyId];
  const { themes = {} } = story && api.getParameters(story.id, PARAM_KEY) || {};

  return { items: parseTheme(themes) };
};

export default function Theme(props) {
  const { channel, api } = props;
  const [currentTheme, changeTheme] = useAddonState(PANEL_ID, DEFAULT_THEME);
  const { disabled } = props.api.getCurrentParameter(PARAM_KEY) || {};

  const handleChange = (params) => {
    changeTheme(params);
    channel.emit(CHANGE, params);
  };

  useEffect(() => {
    channel.on(STORY_CHANGED, () => {
      changeTheme(DEFAULT_THEME);
    });

    return () => (channel.removeListener(STORY_CHANGED))
  }, []);

  if (disabled) return null;

  return (
    <Consumer filter={mapper}>
      {({ items }) => {
        return items.length ? (
          <Fragment>
            <WithTooltip
              placement="top"
              trigger="click"
              closeOnClick
              tooltip={({ onHide }) => (
                <TooltipLinkList
                  links={getDisplayedItems(items, i => {
                    handleChange(i);
                    onHide();
                  }, currentTheme)}
                />
              )}
            >
              <TabButton
                key="Theme"
                title="Change the Theme">
                {currentTheme.name} - {currentTheme.type}
              </TabButton>
            </WithTooltip>
          </Fragment>
        ) : null;
      }}
    </Consumer>
  );
}
