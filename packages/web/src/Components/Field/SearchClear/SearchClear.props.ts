import * as React from "react";

export interface ISearchClearProps {
  onClearSearch: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchIcon?: any;
}
