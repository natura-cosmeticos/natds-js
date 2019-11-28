import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/ClearRounded';

import { IThemeWeb } from 'Themes';
import { tokens } from '@naturacosmeticos/natds-styles';
import { getProp } from './shared';

interface ISearchClear {
  theme: IThemeWeb | unknown;
  onClearSearch: Dispatch<SetStateAction<string>>;
}

const SearchClear: FunctionComponent<ISearchClear> = (props: ISearchClear) => {
  const { theme, onClearSearch } = props;

  return (
    <ClearIconStyled
      theme={theme}
      onClick={() => onClearSearch("")}
    />
  );
}

export default SearchClear;

const ClearIconStyled = styled(ClearIcon)`
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
