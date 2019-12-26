import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Icon } from '@naturacosmeticos/natds-web';
import { makeStyles } from '@material-ui/core/styles';
import { boolean } from '@storybook/addon-knobs';

export const Interactive = () => {
  const useStyles = makeStyles({
    root: {
      width: 500
    }
  });

  const classes = useStyles();

  const [value, setValue] = React.useState('btn1');

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const showLabels = boolean("showLabels", false);

  return (
    <BottomNavigation showLabels={showLabels} className={classes.root} onChange={handleChange} value={value}>
      <BottomNavigationAction label="Button" value="btn1"  icon={<Icon name="filled-action-cancel" size="tiny" />} />
      <BottomNavigationAction label="Nicer Button" value="btn2" icon={<Icon name="filled-action-check" size="tiny" />} />
      <BottomNavigationAction label="Much Nicer Button" value="btn3" icon={<Icon name="filled-media-play" size="tiny" />} />
    </BottomNavigation>
  );
};
