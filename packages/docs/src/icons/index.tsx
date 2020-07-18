/* eslint-disable func-style */
import * as React from "react";
import FuzzySearch from "fuzzy-search";

import { TextField } from "@naturacosmeticos/natds-web";
import "./styles.scss";

export interface IIconDisplayItem {
  category?: string;
  icon?: any;
  iconName?: string;
  name?: string;
}

export interface IIconDisplayProps {
  iconList: IIconDisplayItem[];
  itemsPerRow?: number;
  title?: string;
}

const IconDisplay = (props: IIconDisplayProps) => {
  const { iconList, itemsPerRow, title } = props;
  const builtList = iconList.reduce(buildConfigItem, []);
  const [
    query,
    setQuery
  ] = React.useState("");
  const searcher = new FuzzySearch(builtList, [
    "name",
    "category"
  ]);

  const onSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setQuery(event.target.value);
  };

  const param = query ? query.replace(" ", "") : "";
  const list = searcher.search(param);

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
        {list.length ? list.map(buildListItem, { itemsPerRow }) : emptyList()}
      </dl>
    </div>
  );
};

export default IconDisplay;

const emptyList = () => <dt className="icons__category">No items</dt>;

// @todo refactor(styles): convert to arrow function
function buildListItem (this: any, props: IIconDisplayItem, key: number) {
  // eslint-disable-next-line no-invalid-this
  const { itemsPerRow = "auto" } = this;


  return props.category ? buildCategory(props, key) : buildItem(props, key, itemsPerRow);
}

const buildCategory = ({ category }: IIconDisplayItem, key: number) => <dt className="icons__category" key={key}>
  {category}
</dt>;

function buildItem ({ name, icon, iconName }: IIconDisplayItem, key: number, itemsPerRow: string) {

  /**
   * @todo fix(docs): TS2363 - The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
   */
  // @ts-ignore
  const styles = itemsPerRow === "auto" ? {} : { "flexBasis": `${100 / itemsPerRow}%` };

  return (
    <dd className="icons__item" key={key} style={styles}>
      {icon}
      <h5 className="icons__item__display-name">{iconName}</h5>
      <p className="icons__item__name">{name}</p>
    </dd>
  );
}

// eslint-disable-next-line init-declarations
let lastCategory: string;

function buildConfigItem (accum: any, name: any) {

  const [
    , category,
    iconName
  ] = name.split("-");

  if (lastCategory !== category) {
    lastCategory = category;
    accum.push({ category });
  }

  accum.push({
    name,
    iconName,
    "icon": <i className={`natds-icons natds-icons-2x natds-icons-${String(name)}`} />
  });

  return accum;
}
