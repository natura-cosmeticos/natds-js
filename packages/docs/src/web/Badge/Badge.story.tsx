import * as React from 'react';
import { Badge } from "@naturacosmeticos/natds-web";
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';

export default {
  title: 'Web|Badge',
  component: Badge,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Badge'],
    theme: 'web',
  }
};

export const Interfactive = () => {
  return <Badge>Teste</Badge>;
};
