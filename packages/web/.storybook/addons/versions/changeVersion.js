// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const changeVersion = (version, name) => {
  const { origin, search } = window.location;

  window.location.href = `${origin}/${name}/${version}/${search}`;
};
