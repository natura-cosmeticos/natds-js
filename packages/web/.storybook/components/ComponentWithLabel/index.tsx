import * as React from "react";
import Typography from "../../../src/Components/Typography"

import "./styles.scss";
import {createStyles, makeStyles} from "@material-ui/core";
import ContextualBadge from "../../../src/Components/ContextualBadge";
import {IThemeWeb} from "../../../src/Themes";

export interface IComponentWithLabelItem {
  component: any;
  title?: string;
}

export interface IComponentWithLabelProps {
  componentList: IComponentWithLabelItem[];
  headingText?: string;
  itemsPerRow?: 'auto' | number;
}

const ComponentWithLabel = (props: IComponentWithLabelProps) => {
  const { componentList, headingText, itemsPerRow } = props;

  return (
    <React.Fragment>
      {headingText && headingText.length > 0 && <Typography color={"textPrimary"} component={"h3"} variant={"h6"}>{headingText}</Typography>}
      <ul className="component__list">
        {componentList.map(BuildComponentItem({itemsPerRow}))}
      </ul>
    </React.Fragment>
  );
};

export default ComponentWithLabel;

const BuildComponentItem = ({itemsPerRow = "auto"}) => ({ title, component }: IComponentWithLabelItem, key: number) => {

  const styles = itemsPerRow === "auto" ? {} : { flexBasis: `${100 / itemsPerRow}%` };

  const useStyles = makeStyles(createStyles((theme: IThemeWeb) => {
    heading: {
      marginBottom: console.log(theme)
    }
  }))

  const classes = useStyles();

  return (
    <li className="component__item" key={key} style={styles}>
        <Typography component={"h3"} gutterBottom={true} variant={"overline"}>
          <ContextualBadge color={"light"} component={"h2"}>{title}</ContextualBadge>
        </Typography>
        {component}
    </li>
  );
}
