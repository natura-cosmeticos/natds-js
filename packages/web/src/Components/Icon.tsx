import React, { FunctionComponent } from 'react';
import { IThemeWeb } from 'Themes';

import { withTheme } from '@material-ui/styles';
import '@naturacosmeticos/natds-icons/dist/natds-icons.css';

interface IIconProps {
  name: string;
  theme?: IThemeWeb | unknown;
}

const Icon: FunctionComponent<IIconProps> = (props: IIconProps) => {
  const { name } = props;

  return (
    <i className={`natds-icons natds-icons-${name} natds-icons-1x`} />
  );
};

export default withTheme(Icon);
