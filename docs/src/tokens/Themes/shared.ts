export function parseColortokens(colorTokens: any) {
  const schema = {
    head: ['name', 'color'],
    body: Object.entries(colorTokens).reduce((accumulator , [key, value]) => {

      return [
        ...accumulator,
        [
          {
            type: 'text',
            name: key
          },
          {
            type: 'color',
            name: value
          }
        ]
      ];
    }, [])
  };

  return schema;
}
