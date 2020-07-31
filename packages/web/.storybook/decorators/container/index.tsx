import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { tokens } from "@naturacosmeticos/natds-styles"

const container = (storyFn: any) => <Container><Box style={{padding: tokens.spacing.spacingSemi}}>{storyFn()}</Box></Container>;

export default container;
