import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import '@naturacosmeticos/natds-icons/dist/natds-icons.css';
import { tokens } from '@naturacosmeticos/natds-styles';
import { iconNames } from '@naturacosmeticos/natds-icons';

interface IIconProps {
  name: keyof typeof iconNames;
}

const Icon: FunctionComponent<IIconProps> = (props: IIconProps) => {
  const { name } = props;

  return (
    <IconComponent className={`natds-icons natds-icons-${String(name)}`} />
  );
};

export default Icon;

const IconComponent = styled.i`
  font-size: ${tokens.spacing.spacingStandard}px;
`;
