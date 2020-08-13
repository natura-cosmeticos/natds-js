/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Typography from "../../../src/Components/Typography";
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

const createStylesCallback = (theme: IThemeWeb) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    listStyle: "none",
    margin: theme.sizes && theme.sizes.none,
    padding: theme.sizes && theme.sizes.none,
  },
});

const getComponentItemPadding = (theme: IThemeWeb) => {
  if (!theme.sizes) {
    return null;
  }

  return `${theme.sizes.standard}px ${theme.sizes.medium}px ${theme.sizes.standard}px ${theme.sizes.none}px`;
};

// eslint-disable-next-line max-lines-per-function,max-len
const BuildComponentItem = ({itemsPerRow} : {itemsPerRow: IItemsPerRow}) => ({ title, component }: IComponentWithLabelItem, key: number) => {

  const useStyles = makeStyles(createStyles((theme: IThemeWeb) => ({
    root: {
      boxSizing: "border-box",
      flex: "0 1 auto",
      flexBasis: getFlexBasis(itemsPerRow),
      padding: getComponentItemPadding(theme),
    },
  })));

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes : Record<string, string> = useStyles();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <li className={classes.root} key={key}>
      <Typography component={"h3"} gutterBottom={true} variant={"overline"}>
        <ContextualBadge color={"light"} component={"h2"}>{title}</ContextualBadge>
      </Typography>
      {component}
    </li>
  );
};

// eslint-disable-next-line max-len
export const ComponentWithLabel : React.FunctionComponent<IComponentWithLabelProps> = (props: IComponentWithLabelProps) => {
  const { componentList, headingText, itemsPerRow } = props;

  const useStyles = makeStyles(createStyles(createStylesCallback));

  const classes : Record<string, string> = useStyles();

  const EMPTY_HEADING_TEXT = 0;
  const hasHeadingText = headingText && headingText.length > EMPTY_HEADING_TEXT;

  return (
    <React.Fragment>
      {hasHeadingText && <Typography color={"textPrimary"} component={"h3"} variant={"h6"}>{headingText}</Typography>}
      <ul className={classes.root}>
        {componentList && componentList.map(BuildComponentItem({itemsPerRow}))}
      </ul>
    </React.Fragment>
  );
};

export default ComponentWithLabel;
