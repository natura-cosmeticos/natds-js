type IComponentNames = string[];

interface IComponentParams {
  jestImportPath: string;
  jest: IComponentNames;
  theme: { context: string }
}

// eslint-disable-next-line max-len
export const getComponentParams : (componentNames: IComponentNames) => IComponentParams = (componentNames: IComponentNames) => ({
  jestImportPath: "web",
  jest: componentNames,
  theme: {
    context: "web",
  },
});
