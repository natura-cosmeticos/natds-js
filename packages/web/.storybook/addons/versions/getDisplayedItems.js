import {createItemProps} from "./createItemProps";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getDisplayedItems = (list, onChange, selectedItem) => {
  if (!list.length) {
    return [];
  }

  return [
    ...list.map((params) => createItemProps(params, onChange, selectedItem),
    ),
  ];
};
