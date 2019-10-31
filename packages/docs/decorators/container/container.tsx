import * as React from 'react';

import './styles.scss';

const withContainer = (storyFn: any) => (
  <div className="component__container">{storyFn()}</div>
);

export default withContainer;
