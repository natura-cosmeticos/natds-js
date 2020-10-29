import { Button, IButtonProps } from "@naturacosmeticos/natds-web";
import * as React from "react";
import * as PropTypes from "prop-types";

export const CallToAction : React.FunctionComponent<IButtonProps> = (props) => {

  const { children, ...otherProps } = props;

  return <Button
    color={"primary"}
    variant={"contained"}
    {...otherProps}>
    {children}
  </Button>;
};

CallToAction.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CallToAction;
