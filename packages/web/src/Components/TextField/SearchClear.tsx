import React, { FunctionComponent, Dispatch, SetStateAction, ComponentType } from 'react';
import styled from 'styled-components';
import ClearRounded from '@material-ui/icons/ClearRounded';

import { IThemeWeb } from 'Themes';
import { tokens } from '@naturacosmeticos/natds-styles';
import { getProp } from './shared';

interface ISearchClear {
  theme: IThemeWeb | unknown;
  onClearSearch: Dispatch<SetStateAction<string>>;
  searchIcon?: ComponentType;
}

const SearchIconStyles = `
  width: ${tokens.spacing.spacingStandard}px;
  height: ${tokens.spacing.spacingStandard}px;
  fill:  ${getProp('palette', 'text', 'primary')};
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${tokens.spacing.spacingSmall}px;
  margin: auto;
  cursor: pointer;
`;

const SearchClear: FunctionComponent<ISearchClear> = (props: ISearchClear) => {
  const { theme, onClearSearch, searchIcon = ClearRounded } = props;
  const Component: ComponentType<any> = styled(searchIcon)`${SearchIconStyles}`;

  return (
    <Component
      theme={theme}
      onClick={() => onClearSearch("")}
    />
  );
};

export default SearchClear;
