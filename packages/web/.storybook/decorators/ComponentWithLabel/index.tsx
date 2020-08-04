import * as React from "react";
import Typography from "../../../src/Components/Typography"
import {createStyles, makeStyles} from "@material-ui/core";
import ContextualBadge from "../../../src/Components/ContextualBadge";
import {getFlexBasis, IItemsPerRow} from "./getFlexBasis";
import {IThemeWeb} from "../../../src/Themes";

export interface IComponentWithLabelItem {
  component: any;
  title?: string;
}

export interface IComponentWithLabelProps {
  componentList: IComponentWithLabelItem[];
  headingText?: string;
  itemsPerRow?: IItemsPerRow;
}

export const ComponentWithLabel = (props: IComponentWithLabelProps) => {
  const { componentList, headingText, itemsPerRow } = props;

  const createStylesCallback = (theme: IThemeWeb) => ({
    root: {
      display: 'flex',
      flexFlow: 'row wrap',
      listStyle: 'none',
      margin: theme.sizes.none,
      padding: theme.sizes.none
    }
  });

  const useStyles = makeStyles(createStyles(createStylesCallback));

  const classes = useStyles();

  return (
    <React.Fragment>
      {headingText && headingText.length > 0 && <Typography color={"textPrimary"} component={"h3"} variant={"h6"}>{headingText}</Typography>}
      <ul className={classes["root"]}>
        {componentList.map(BuildComponentItem({itemsPerRow}))}
      </ul>
    </React.Fragment>
  );
};

const BuildComponentItem = ({itemsPerRow} : {itemsPerRow: IItemsPerRow}) => ({ title, component }: IComponentWithLabelItem, key: number) => {

  const useStyles = makeStyles(createStyles((theme: IThemeWeb) => ({
    root: {
      boxSizing: 'border-box',
      flex: '0 1 auto',
      flexBasis: getFlexBasis(itemsPerRow),
      padding: `${theme.sizes.standard}px ${theme.sizes.medium}px ${theme.sizes.standard}px ${theme.sizes.none}px`
    }
  })));

  const classes = useStyles();

  return (
    <li className={classes["root"]} key={key}>
        <Typography component={"h3"} gutterBottom={true} variant={"overline"}>
          <ContextualBadge color={"light"} component={"h2"}>{title}</ContextualBadge>
        </Typography>
        {component}
    </li>
  );
}

export default ComponentWithLabel;
