import React, {Fragment, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {TabButton, TooltipLinkList, WithTooltip} from "@storybook/components";
import {PARAM_KEY} from "./shared";
import readConfig from "./readConfig";
import {getDisplayedItems} from "./getDisplayedItems";
import {LocalhostWarning} from "./LocalhostWarning";
import {errorReadingFile} from "./errorReadingFile";
import {mapper} from "./mapper";
import {changeVersion} from "./changeVersion";

import "./styles.css";

// eslint-disable-next-line max-lines-per-function,@typescript-eslint/explicit-module-boundary-types
export const Versions = (props) => {
  const { disabled } = props.api.getCurrentParameter(PARAM_KEY) || {};
  const [
    versions, setVersions,
  ] = useState([]);
  const [
    currentVersion, setCurrentVersion,
  ] = useState(null);
  const isLocal = window.location.hostname === "localhost";

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isLocal) {
      return LocalhostWarning;
    }

    readConfig().then(setVersions)
      .catch(errorReadingFile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

    /**
     * @todo refactor(style): use array destructuring
     * @type {string}
     */
    // eslint-disable-next-line prefer-destructuring
    const currentVersionOnUrl = window.location.pathname.split("/")[2];

    if (currentVersionOnUrl) {
      setCurrentVersion(currentVersionOnUrl);
    }

    if (!currentVersionOnUrl && versions.length) {
      setCurrentVersion(versions[0].versions[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = ({ version, name }) => {
    changeVersion(version, name);

    /**
     * @todo fix(styles): 'onHide' is not defined
     */
    // eslint-disable-next-line no-undef
    onHide();
  };

  if (disabled) {
    return null;
  }

  const items = mapper(versions);

  return (
    <Fragment>
      <WithTooltip
        placement="top"
        trigger="click"
        closeOnClick
        // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
        tooltip={({ onHide }) => <TooltipLinkList
          links={getDisplayedItems(items, handleChange, currentVersion)}
        />
        }
      >
        <TabButton
          key="Theme"
          title="Change the Theme">
          {currentVersion}
        </TabButton>
      </WithTooltip>
    </Fragment>
  );
};

Versions.propTypes = {
  api: PropTypes.shape({
    getCurrentParameter: PropTypes.func.isRequired,
  }),
};
