import * as React from "react";
import { IMockedIconProps } from "./Icon.props";

export const Icon : React.FunctionComponent<IMockedIconProps> = (props: IMockedIconProps) => <i {...props} />;

export default Icon;
