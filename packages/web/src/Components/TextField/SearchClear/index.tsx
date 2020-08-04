import React, {
  Dispatch, FunctionComponent, SetStateAction,
} from "react";
import styled from "styled-components";
import ClearRounded from "@material-ui/icons/ClearRounded";

import { tokens } from "@naturacosmeticos/natds-styles";
import {IThemeWeb} from "../../../Themes";

export interface ISearchClear {
  theme: IThemeWeb | unknown;
  onClearSearch: Dispatch<SetStateAction<string>>;
  searchIcon?: any;
}

const SearchIconStyles = `
  width: ${tokens.spacing.spacingStandard}px;
  height: ${tokens.spacing.spacingStandard}px;
  position: absolute;
  top: ${tokens.spacing.spacingSmall}px;
  right: ${tokens.spacing.spacingSmall}px;
  cursor: pointer;

  &, & > svg { fill: inherit!important; }
`;

export const SearchClear: FunctionComponent<ISearchClear> = (props: ISearchClear) => {
  const { theme, onClearSearch, searchIcon = ClearRounded } = props;
  const Component : any = styled(searchIcon)`${SearchIconStyles}`;

  return (
    <Component
      theme={theme}
      onClick={onClearSearch}
    />
  );
};

export default SearchClear;
