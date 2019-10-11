import * as React from 'react';

// import * as styles from '../../styles/tokens.css'

function ColorToken(props: { color: string }) {
  const style = {
    background: 'var('+ props.color +')',
    width: '200px',
    height: '120px',
    borderRadius: '5px',
    display: 'flex',
    fontSize: '12px',
    fontFamily: 'sans-serif',
    padding: '10px'
  }

  // const cssReq = require.context('!!raw-loader!../../styles', true, /.\.css$/);
  // const cssTokenFiles = cssReq.keys().map((filename) => ({
  //   filename,
  //   content: cssReq(filename).default
  // }));

  // const rawCss = cssTokenFiles[0].content

  // const section = rawCss.split('@tokens')

  // console.log(section[0].split(':root'))

  return (
    <div style={style}>
      {props.color}
    </div>
  )
}

export default {
  title: 'Tokens|Colors',
  component: ColorToken
};

export const Colors = () => (
  <ColorToken color="--primary-800-default" />
);
