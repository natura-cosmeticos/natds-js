import * as React from "react";

import "./styles.scss";

const container = (storyFn: any) => <div className="component__container">{storyFn()}</div>;

export default container;
