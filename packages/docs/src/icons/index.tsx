import * as React from 'react';
import FuzzySearch from 'fuzzy-search';

import { TextField } from '@naturacosmeticos/natds-web';
import './styles.scss';

export interface IIconDisplayItem {
  name?: string;
  iconName?: string;
  category?: string;
  icon?: any;
}

export interface IIconDisplayProps {
  iconList: IIconDisplayItem[];
  itemsPerRow?: number;
  title?: string;
}

export default function IconDisplay(props: IIconDisplayProps) {
  const { iconList, itemsPerRow, title } = props;
  const buildedList = iconList.reduce(buildConfigItem, []);
  const [query, setQuery] = React.useState("");
  const searcher = new FuzzySearch(buildedList, ['name', 'category']);

  const onSearch = (event) => {
    setQuery(event.target.value);
  };

  const list = searcher.search(query.replace(' ', ''));

  return (
    <div className="icons">
      <div className="icons__header">
        <h3 className="icons__title">{title}</h3>
        <TextField
          className="icons__search"
          placeholder="Search"
          size="small"
          type="search"
          onChange={onSearch}
        />
      </div>
      <dl className="icons__list">
        {list.length ? list.map(buildListItem, { itemsPerRow }): emptyList()}
      </dl>
    </div>
  );
}

function emptyList() {
  return (
    <dt className="icons__category">No items</dt>
  );
}

function buildListItem(props: IIconDisplayItem, key: number) {
  const { itemsPerRow = 'auto' } = this;
  return props.category ? BuildCategory(props, key) : BuildItem(props, key, itemsPerRow);
}

function BuildCategory({ category }: IIconDisplayItem, key: number) {
  return (
    <dt className="icons__category" key={key}>
      {category}
    </dt>
  );
}

function BuildItem({ name, icon, iconName }: IIconDisplayItem, key: number, itemsPerRow: string) {
  const styles = itemsPerRow === 'auto' ? {} : { flexBasis: `${100 / itemsPerRow}%` };

  return (
    <dd className="icons__item" key={key} style={styles}>
      {icon}
      <h5 className="icons__item__display-name">{iconName}</h5>
      <p className="icons__item__name">{name}</p>
    </dd>
  );
}

let lastCategory: string;

function buildConfigItem(accum: any, name: any) {
  const nameParts = name.split('-');
  const category = nameParts[1];
  const iconName = nameParts[2];

  if (lastCategory !== category) {
    lastCategory = category;
    accum.push({ category });
  }

  accum.push({
    name,
    iconName,
    icon: <i className={`natds-icons natds-icons-2x natds-icons-${String(name)}`} />
  });

  return accum;
}
