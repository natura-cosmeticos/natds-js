// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
export const handleIndeterminate = ({dataState}: {dataState: any[]}) => {
  const numSelected = dataState.filter((item) => item.selected).length;

  const NO_ROW_SELECTED = 0;

  return numSelected > NO_ROW_SELECTED && numSelected < dataState.length;
};
