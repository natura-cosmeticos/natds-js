import * as React from 'react';

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
