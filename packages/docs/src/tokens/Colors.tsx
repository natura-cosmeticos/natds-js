import * as React from 'react';
import * as colors from '@naturacosmeticos/natds-styles/sass/natura.scss';

const styles = {
  container: {
    background: '#f0f0f0',
    display: 'flex',
    flexFlow: 'row wrap',
    padding: '30px'
  },
  group: {
    display: 'flex',
    flexFlow: 'row wrap',
    flex: '1 1 auto'
  },
  groupTitle: {
    fontSize: '24px',
    fontFamily: 'sans-serif',
    flex: '0 0 100%'
  },
  item: {
    background: '#fff',
    borderRadius: '5px',
    display: 'flex',
    flex: '0 0 auto',
    flexFlow: 'column',
    padding: '10px',
    margin: '0 30px 30px 0',
    boxShadow: 'rgba(0,0,0,.05) 0 1px 4px 1px'
  },
  itemColor: {
    width: '250px',
    height: '80px',
    borderRadius: '5px'
  },
  itemName: {
    fontSize: '14px',
    fontFamily: 'sans-serif',
    fontWeight: 400,
    color: '#333',
    lineHeight: 1.5,
    width: '100%',
    padding: '10px 0 0',
    margin: '0'
  },
  itemColorName: {
    fontSize: '14px',
    fontFamily: 'sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#666',
    width: '100%',
    padding: '10px 0 0',
    margin: '0'
  }
};

const colorTokens = [
  {
    id: 'primary',
    name: 'Primary'
  },
  {
    id: 'primary_variants',
    name: 'Primary variants'
  },
  {
    id: 'secondary',
    name: 'Secondary'
  },
  {
    id: 'secondary_variants',
    name: 'Secondary variants'
  },
  {
    id: 'surface_and_background',
    name: 'Surface and Backgrounds'
  },
  {
    id: 'content',
    name: 'Content'
  },
  {
    id: 'feedback',
    name: 'Feedback'
  },
  {
    id: 'levels_cn',
    name: 'Levels CN'
  },
  {
    id: 'natura_brand_primary',
    name: 'Natura Brand Primary'
  },
  {
    id: 'natura_brand_secondary',
    name: 'Natura Brand Secondary'
  },
  {
    id: 'natura_brand_complement',
    name: 'Natura Brand Complement'
  }
];

function filterGroup(filter: string) {
  return Object.keys(colors).filter(color => color.split('-')[0] === filter);
}

function BuildColorList(color: string) {
  const colorValue = colors[color];
  const colorStyle = {
    ...styles.itemColor,
    background: colorValue
  };

  const group = color.split('-')[0];
  const name = color.replace(group + '-', '');

  return (
    <div style={styles.item} key={color}>
      <span style={colorStyle} />
      <p style={styles.itemName}>${name}</p>
      <p style={styles.itemColorName}>{colorValue}</p>
    </div>
  );
}

const BuildColorGroup = (group: { name: string; id: string }, index: number = 0) => (
  <div style={styles.group} key={index}>
    <h3 style={styles.groupTitle}>{group.name}</h3>
    {filterGroup(group.id).map(BuildColorList)}
  </div>
);

export default {
  title: 'Tokens|Colors'
};

export const All = () => (
  <div style={styles.container}>
    {colorTokens.map(BuildColorGroup)}
  </div>
);

export const Primary = () => (
  <div style={styles.container}>
    {BuildColorGroup(colorTokens[0])}
    {BuildColorGroup(colorTokens[1])}
  </div>
);

export const Secondary = () => (
  <div style={styles.container}>
    {BuildColorGroup(colorTokens[2])}
    {BuildColorGroup(colorTokens[3])}
  </div>
);

export const Brand = () => (
  <div style={styles.container}>
    {BuildColorGroup(colorTokens[8])}
    {BuildColorGroup(colorTokens[9])}
    {BuildColorGroup(colorTokens[10])}
  </div>
);

export const General = () => (
  <div style={styles.container}>
    {BuildColorGroup(colorTokens[4])}
    {BuildColorGroup(colorTokens[5])}
    {BuildColorGroup(colorTokens[6])}
    {BuildColorGroup(colorTokens[7])}
  </div>
);
