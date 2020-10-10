import {
  CssBaseline, Provider, themes,
} from "@naturacosmeticos/natds-web";
import * as React from "react";
import * as PropTypes from "prop-types";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode
}

export const Layout: React.FunctionComponent<Props> = (props) => {

  const { children } = props;

  return (
    <Provider theme={themes.natura.light}>
      <CssBaseline>
        <Header />
        {children}
      </CssBaseline>
    </Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
