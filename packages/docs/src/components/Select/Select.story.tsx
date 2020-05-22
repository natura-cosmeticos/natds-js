import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import {
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  FormControl
} from '@naturacosmeticos/natds-web';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// Component not finished yet
/*import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/withContainer';

import SelectDocs from './Select.docs.mdx';

export default {
  title: 'Components|Select',
  component: [Select],
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Select'],
    theme: {
      context: 'web',
    },
    docs: {
      page: SelectDocs,
    },
  },
};*/

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      width: '200px',
      marginTop: theme.spacing(1),
    },
    label: {},
  })
);

export const Interactive = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl
      className={classes.formControl}
      disabled={boolean('disabled', false)}
    >
      <InputLabel shrink>Teste</InputLabel>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty={boolean('displayEmpty', true)}
        disabled={boolean('disabled', false)}
        autoWidth={boolean('autoWidth', false)}
        className={classes.selectEmpty}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText>Some important helper text</FormHelperText>
    </FormControl>
  );
};
