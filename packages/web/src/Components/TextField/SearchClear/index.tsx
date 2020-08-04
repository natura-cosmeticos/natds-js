import * as React from "react";
import styled from "styled-components";
import ClearRounded from "@material-ui/icons/ClearRounded";

import { tokens } from "@naturacosmeticos/natds-styles";
import {IThemeWeb} from "../../../Themes";

export interface ISearchClear {
  theme: IThemeWeb | unknown;
  onClearSearch: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export const SearchClear: React.FunctionComponent<ISearchClear> = (props: ISearchClear) => {
  const { theme, onClearSearch, searchIcon = ClearRounded } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component : any = styled(searchIcon)`${SearchIconStyles}`;

  return (
    <Component
      theme={theme}
      onClick={onClearSearch}
    />
  );
};

export default SearchClear;
