import React, { useEffect, useState, Fragment } from "react";
import { TabButton, WithTooltip, TooltipLinkList } from "@storybook/components";
import { PARAM_KEY } from "./shared";

import readConfig from "./readConfig";

import "./styles.css";

const errorReadingFile = (fileReadError) => {
  // eslint-disable-next-line no-console
  console.error("Unable to get Package version list", fileReadError);
};

// @todo refactor(docs): adopt <Typography /> instead of <h4 />
const LocalhostWarning = () => <h4 className="versions__warning">Versions don&apos;t work in localhost environments</h4>;


const changeVersion = (version, name) => {
  const { origin, search } = window.location;
  const newPath = `${origin}/${name}/${version}/${search}`;

  window.location.href = newPath;
};

const mapper = (list = []) => {
  const [{ versions = [], name } = {}] = list;


  return versions.map((version) => ({ name,
    version }));
};

export const Versions = (props) => {
  const { disabled } = props.api.getCurrentParameter(PARAM_KEY) || {};
  const [
    versions,
    setVersions
  ] = useState([]);
  const [
    currentVersion,
    setCurrentVersion
  ] = useState(null);
  const isLocal = window.location.hostname === "localhost";

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isLocal) {
      return LocalhostWarning;
    }

    readConfig().then(setVersions).
      catch(errorReadingFile);
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
  }, [versions]);

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

const getDisplayedItems = (list, onChange, selectedItem) => {
  if (!list.length) {
    return [];
  }

  return [
    ...list.map((params) => createItemProps(params, onChange, selectedItem)
    )
  ];
};

const createItemProps = ({ name, version }, onChange, selectedItem) => ({
  "id": `${name}-${version}`,
  "title": version,
  "active": selectedItem === version,
  "onClick": () => onChange({ name,
    version })
});
