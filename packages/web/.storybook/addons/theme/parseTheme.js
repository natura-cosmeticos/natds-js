// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const parseTheme = (themes) => Object.entries(themes).reduce((accum, [
  name, variants,
]) => {
  Object.entries(variants).forEach(([type]) => {
    accum.push({
      name,
      type,
    });
  });

  return accum;
}, []);
