import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { withTheme } from '@material-ui/styles';
import { IIconSizes } from '@naturacosmeticos/natds-styles';
import { iconNames } from '@naturacosmeticos/natds-icons';
import { IThemeWeb } from 'Themes';
import '@naturacosmeticos/natds-icons/dist/natds-icons.css';

export interface IIconProps {
  name: keyof typeof iconNames;
  size?: keyof IIconSizes;
  theme: IThemeWeb | unknown;
}

const Icon: FunctionComponent<IIconProps> = (props: IIconProps) => {
  const { name, theme, size } = props;
  const className = `natds-icons natds-icons-${String(name)}`;

  return (
    <IconComponent
      className={className}
      theme={theme}
      size={size}
    />
  );
};

export default withTheme(Icon);

const IconComponent = styled.i<Pick<IIconProps, 'size' | 'theme'>>`
  font-size: ${({ size, theme }) => {
    const { iconSizes = {} } = theme || {};
    const fontSize = size ? iconSizes[size] : iconSizes.standard;
    return `${fontSize}px`;
  }};
`;
