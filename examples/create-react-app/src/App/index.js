import React from 'react'
import {Provider, Button, Icon} from "@naturacosmeticos/natds-web";

export const App = () => (
  <Provider>
    <Button color={"primary"} variant={"contained"}>
      <Icon name={"filled-action-add"} size={"tiny"} />
      Button
    </Button>
  </Provider>
)

