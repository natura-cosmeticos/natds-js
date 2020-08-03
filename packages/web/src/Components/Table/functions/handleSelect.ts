import * as React from "react";
import {IDataTable} from "../stories/exampleDataTable";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
export const handleSelect = ({dataState, setSelected}) => (event: React.MouseEvent<unknown>, item: any) => {
  let modifiedTable: IDataTable[] = [];

  modifiedTable = dataState.map((auxItem) => {
    if (auxItem.id === item.id) {
      const updatedAuxItem = auxItem;

      updatedAuxItem.selected = !updatedAuxItem.selected;

      return updatedAuxItem;
    }

    return auxItem;
  });

  setSelected(modifiedTable);
};
