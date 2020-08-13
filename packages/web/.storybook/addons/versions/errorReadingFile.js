/* eslint-disable no-console,@typescript-eslint/explicit-module-boundary-types */
export const errorReadingFile = (fileReadError) => {
  console.error("Unable to get Package version list", fileReadError);
};
