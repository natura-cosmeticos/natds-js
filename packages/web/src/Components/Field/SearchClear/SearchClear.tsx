import * as React from "react";
import ClearRounded from "@material-ui/icons/ClearRounded";

import { ISearchClearProps } from "./SearchClear.props";
import { useStyles } from "./SearchClear.styles";

export { ISearchClearProps } from "./SearchClear.props";

export const SearchClear : React.FunctionComponent<ISearchClearProps> = (props: ISearchClearProps) => {
  const { onClearSearch, searchIcon: Component = ClearRounded } = props;

  const { root } = useStyles();

  return (
    <Component
      className={root}
      onClick={onClearSearch}
    />
  );
};

export default SearchClear;
