import React, { useState, useEffect } from 'react';
import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import { RenderOptions } from '@storybook/api/dist/modules/addons';

import './styles.css';
import readConfig from './readConfig';

const ADDON_ID = 'versions';
const PANEL_ID = `${ADDON_ID}/panel`;
const TITLE = 'Versions';

function errorReadingFile() {
  console.log('Unable to get Package version list');
}

function Panel() {
  const [versions, setVersions] = useState([]);
  const isLocal = window.location.hostname === 'localhost';

  useEffect(() => {
    if (!isLocal && !versions.length) {
      readConfig().then(setVersions).catch(errorReadingFile);
    }
  });

  return (
    <div className="versions">
      {isLocal ? <LocalhostWarning /> : versions.map(createVersionType)}
    </div>
  )
}

function LocalhostWarning() {
  return (
    <h4 className="versions__warning">Versions don't work in localhost environments</h4>
  )
}

function createVersionType({ versions, name }, key) {
  return (
    <div className="versions__type" key={key}>
      <h4 className="versions__type__name">{name}</h4>
      {versions.map(createVersionsLinks, { name })}
    </div>
  )
}

function createVersionsLinks(version, key) {
  const { name } = this
  const selected = window.location.pathname.split('/')[2] === version

  return (
    <button
      onClick={() => changeVersion(version, name)}
      className="versions__type__button versions__type__button--selected"
      key={key}>
      {version}
    </button>
  )
}

function changeVersion(version, name) {
  const { origin, search } = window.location;
  const newPath = `${origin}/${name}/${version}/${search}`

  window.location.href = newPath;
}

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    paramKey: ADDON_ID,
    title: TITLE,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Panel />
      </AddonPanel>
    )
  })
})
