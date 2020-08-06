export const getComponentParams = (componentNames: string[]) => ({
  jestImportPath: "web",
  jest: componentNames,
  theme: {
    context: "web",
  }
})
