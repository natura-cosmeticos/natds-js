// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createItemProps = ({ name, version }, onChange, selectedItem) => ({
  id: `${name}-${version}`,
  title: version,
  active: selectedItem === version,
  onClick: () => onChange({
    name,
    version,
  }),
});
