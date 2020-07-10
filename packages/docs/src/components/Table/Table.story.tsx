import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/withContainer';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@naturacosmeticos/natds-web';

import TableDocs from './Table.docs.mdx';

export default {
  title: 'Components|Table',
  component: [TableContainer, Table, TableHead, TableRow, TableCell, TableBody],
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Table'],
    theme: {
      context: 'web',
    },
    docs: {
      page: TableDocs,
    },
  },
};

export { Interactive } from './Interactive';
