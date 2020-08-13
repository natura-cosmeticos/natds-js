// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mapper = (list = []) => {
  const [{ versions = [], name } = {}] = list;

  return versions.map((version) => ({
    name,
    version,
  }));
};
