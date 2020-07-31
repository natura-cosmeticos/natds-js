import * as React from "react";
import Typography from "../../../src/Components/Typography"

import "./styles.scss";
import {createStyles, makeStyles} from "@material-ui/core";
import ContextualBadge from "../../../src/Components/ContextualBadge";

export interface IComponentWithLabelItem {
  title?: string;
  component: any;
}

export interface IComponentWithLabelProps {
  componentList: IComponentWithLabelItem[];
  itemsPerRow?: number;
}

const ComponentWithLabel = (props: IComponentWithLabelProps) => {
  const { componentList, itemsPerRow } = props;

  return (
    <ul className="component__list">
      {componentList.map(BuildComponentItem, { itemsPerRow })}
    </ul>
  );
};

export default ComponentWithLabel;

/**
 * @todo refactor(docs): convert to arrow function after removing invalid this
 * @param title
 * @param component
 * @param key
 * @constructor
 */
// eslint-disable-next-line func-style
function BuildComponentItem({ title, component }: IComponentWithLabelItem, key: number) {

  /**
   * @todo refactor(docs): remove unexpected/invalid this
   */
  // @ts-ignore
  const { itemsPerRow = "auto" }:any = this;
  const styles = itemsPerRow === "auto" ? {} : { flexBasis: `${100 / itemsPerRow}%` };

  const useStyles = makeStyles(createStyles((theme) => {
    heading: {
      marginBottom: console.log(theme)
    }
  }))

  const classes = useStyles();

  return (
    <li className="component__item" key={key} style={styles}>
      <Typography component={"h2"} gutterBottom={true} variant={"caption"}>
        <ContextualBadge color={"light"} component={"h2"}>{title}</ContextualBadge>
      </Typography>
      {component}
    </li>
  );
}
