export type IItemsPerRow = number | "auto" | undefined;

export const getFlexBasis: (itemsPerRow: IItemsPerRow) => (any) = (itemsPerRow: IItemsPerRow) => {
  if(typeof itemsPerRow === "undefined" || itemsPerRow === 'auto') {
    return null;
  }
  const value = 100 / itemsPerRow;
  return `${value}%`
};
