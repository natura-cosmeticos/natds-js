export const globalTypes = {
  brand: {
    name: 'Theme',
    description: 'The brand theme for components',
    defaultValue: 'natura',
    toolbar: {
      showName: true,
      items: [
        { value: 'aesop', title: 'Aesop' },
        { value: 'avon', title: 'Avon' },
        { value: 'natura', title: 'Natura' },
        { value: 'theBodyShop', title: 'The Body Shop' },
      ],
    },
  },
};

export default globalTypes;
