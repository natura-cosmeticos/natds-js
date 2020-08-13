/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const createBackgroundSelectorItem = ({name, type}, onChange, selectedItem) => ({
  id: `${name} - ${type}`,
  title: `${name} - ${type}`,
  active: selectedItem.name === name && selectedItem.type === type,
  onClick: () => onChange({
    name,
    type,
  }),
});
