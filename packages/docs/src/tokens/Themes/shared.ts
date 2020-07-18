// @todo refactor(docs): rename to parseColorTokens (with T)
export const parseColortokens = (colorTokens: any) => {
  const schema = {
    head: [
      "name", "color",
    ],
    body: Object.entries(colorTokens).reduce((accumulator, [
      key, value,
    ]) => [
      ...accumulator,
      [
        {
          type: "text",
          name: key,
        },
        {
          type: "color",
          name: value,
        },
      ],
    ], []),
  };

  return schema;
};
