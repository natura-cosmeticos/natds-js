import {
  AppBar, Container, Toolbar,
} from "@naturacosmeticos/natds-web";
import * as React from "react";
import HeaderNavigation from "../HeaderNavigation";

export const Header: React.FC = () => (
  <AppBar color={"default"} elevation={0} position={"static"}>
    <Container>
      <Toolbar>
        Natura
        <HeaderNavigation />
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
