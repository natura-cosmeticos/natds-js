import React from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  FormControl,
} from '@naturacosmeticos/natds-web';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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

export const SelectSimpleWrapper = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink>Select Simples</InputLabel>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export const SelectSimpleWithHelpTextWrapper = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink>Select Simples With Help Text</InputLabel>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
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

export const SelectDisabledWrapper = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl className={classes.formControl} disabled>
      <InputLabel shrink>Select Disabled</InputLabel>
      <Select
        value={age}
        onChange={handleChange}
        disabled
        displayEmpty
        className={classes.selectEmpty}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export const selectSimples = [
  {
    title: 'Select Simples',
    component: <SelectSimpleWrapper />,
  },
];

export const selectSimpleWithHelpTextWrapper = [
  {
    title: 'Select Simples With Help Text',
    component: <SelectSimpleWithHelpTextWrapper />,
  },
];

export const selectDisabledWrapper = [
  {
    title: 'Select Disabled',
    component: <SelectDisabledWrapper />,
  },
];
