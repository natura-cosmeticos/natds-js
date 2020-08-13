import {Consumer, useAddonState} from "@storybook/api";
import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {STORY_CHANGED} from "@storybook/core-events";
import {TabButton, TooltipLinkList, WithTooltip} from "@storybook/components";
import {CHANGE, PANEL_ID, PARAM_KEY} from "./shared";
import {getDisplayedItems} from "./getDisplayedItems";
import {mapper} from "./mapper";

const DEFAULT_THEME = {
  name: "natura",
  type: "light",
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,max-lines-per-function
export const Theme = (props) => {
  const {channel, api} = props;
  const [
    currentTheme, changeTheme,
  ] = useAddonState(PANEL_ID, DEFAULT_THEME);
  const {disabled} = api.getCurrentParameter(PARAM_KEY) || {};

  const handleChange = (params) => {
    changeTheme(params);
    channel.emit(CHANGE, params);
  };

  useEffect(() => {
    channel.on(STORY_CHANGED, () => {
      changeTheme(DEFAULT_THEME);
    });

    return () => channel.removeListener(STORY_CHANGED);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (disabled) {
    return null;
  }

  const ONE_ITEM = 1;

  return (
    <Consumer filter={mapper}>
      {/* eslint-disable-next-line max-lines-per-function */}
      {({items}) => {
        if (items.length < ONE_ITEM) {
          return null;
        }

        return (
          <Fragment>
            <WithTooltip
              placement="top"
              trigger="click"
              closeOnClick
              tooltip={({onHide}) => <TooltipLinkList
                links={getDisplayedItems(items, (onChangeParam) => {
                  handleChange(onChangeParam);
                  onHide();
                }, currentTheme)}
              />
              }
            >
              <TabButton
                key="Theme"
                title="Change the Theme">
                {currentTheme.name} - {currentTheme.type}
              </TabButton>
            </WithTooltip>
          </Fragment>
        );
      }}
    </Consumer>
  );
};

Theme.propTypes = {
  api: PropTypes.shape({
    getCurrentParameter: PropTypes.func,
  }),
  channel: PropTypes.shape({
    emit: PropTypes.func,
    on: PropTypes.func,
    removeListener: PropTypes.func,
  }),
};
