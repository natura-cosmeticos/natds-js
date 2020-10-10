import {
  ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, ITypographyProps, Typography,
} from "@naturacosmeticos/natds-web";
import * as React from "react";
import * as PropTypes from "prop-types";

type Props = {
  children: ITypographyProps["children"],
  excerpt: ITypographyProps["children"],
  title: ITypographyProps["children"],
};

export const HelpFaqItem : React.FunctionComponent<Props> = (props) => {

  const { children, excerpt, title } = props;

  return <ExpansionPanel>
    <ExpansionPanelSummary>
      <div>
        <Typography component={"h3"} variant={"subtitle1"}>{title}</Typography>
        <Typography color={"textSecondary"} component={"p"} variant={"body2"}>{excerpt}</Typography>
      </div>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography component={"div"} variant={"body2"}>{children}</Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>;
};

HelpFaqItem.propTypes = {
  children: PropTypes.node.isRequired,
  excerpt: PropTypes.node,
  title: PropTypes.node.isRequired,
};

export default HelpFaqItem;
