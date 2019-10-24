import * as React from 'react';

const styles = {
  display: 'flex'
};

const MobileDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>;

export default MobileDecorator;
