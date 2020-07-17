/**
 * @todo Review/re-enable `no-construct` tslint rule
 */
import React, { ComponentType, Dispatch, FunctionComponent, SetStateAction } from "react";
import styled from "styled-components";
import ClearRounded from "@material-ui/icons/ClearRounded";

import { IThemeWeb } from "Themes";
import { tokens } from "@naturacosmeticos/natds-styles";

export interface ISearchClear {
  theme: IThemeWeb | unknown;
  onClearSearch: Dispatch<SetStateAction<string>>;
  searchIcon?: ComponentType;
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
  const { theme, onClearSearch, searchIcon = ClearRounded } = props,
    Component: ComponentType<any> = styled(searchIcon)`${SearchIconStyles}`;

  return (
    <Component
      theme={theme}
      onClick={onClearSearch}
    />
  );
};

export default SearchClear;
