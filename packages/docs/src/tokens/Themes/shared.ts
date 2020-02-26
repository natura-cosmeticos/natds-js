function flattenTheme(accum: any, [key, value]: any): any {
  const type = typeof value;

  if (type === 'function' || (type === 'object' && !!value)) {
    return Object.entries(value).reduce(flattenTheme, [key, ...accum]);
  }

  const [parent] = accum;

  if (!parent) return accum;

  const name = `${parent}-${key}`;

  return [...accum, [{ name }, { name: value, type: 'color' }]];
}

function removeStrings(entry: any) {
  return typeof entry !== 'string';
}

export function parseTheme(theme: any) {
  const schema = {
    head: ['name', 'color'],
    body:
      theme &&
      theme.palette &&
      Object.entries(theme.palette)
        .reduce(flattenTheme, [])
        .filter(removeStrings)
  };

  schema.body.push(
    [
      {
        name: 'fontFamilyBranding1',
        type: 'text',
      },
      {
        name: theme.typography.fontFamilyBrand1
          ? theme.typography.fontFamilyBrand1
          : 'Undefined',
        type: 'text',
      },
    ],
    [
      {
        name: 'fontFamilyBranding2',
        type: 'text',
      },
      {
        name: theme.typography.fontFamilyBrand2
          ? theme.typography.fontFamilyBrand2
          : 'Undefined',
        type: 'text',
      },
    ],
    [
      {
        name: 'fontFamilyBranding3',
        type: 'text',
      },
      {
        name: theme.typography.fontFamilyBrand3
          ? theme.typography.fontFamilyBrand3
          : 'Undefined',
        type: 'text',
      },
    ],
  );

  return schema;
}
