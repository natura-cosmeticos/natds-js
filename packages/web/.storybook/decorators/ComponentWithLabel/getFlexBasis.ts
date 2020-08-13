export type IItemsPerRow = number | "auto" | undefined;

export const getFlexBasis: (itemsPerRow: IItemsPerRow) => (null | string) = (itemsPerRow: IItemsPerRow) => {
  if (typeof itemsPerRow === "undefined" || itemsPerRow === "auto") {
    return null;
  }

  const FULL_WIDTH = 100;
  const value = FULL_WIDTH / itemsPerRow as number;

  return `${value}%`;
};
