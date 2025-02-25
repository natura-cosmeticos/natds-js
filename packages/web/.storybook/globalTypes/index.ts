export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      showName: true,
      items: [
        { right: '🌑', title: 'Avon Dark', value: 'avonDark' },
        { right: '☀️', title: 'Avon Light', value: 'avonLight' },
        { right: '🌑', title: 'Avon_v2 Dark', value: 'avonV2Dark' },
        { right: '☀️', title: 'Avon_v2 Light', value: 'avonV2Light' },
        { right: '🌑', title: 'Avon_v3 Dark', value: 'avonV3Dark' },
        { right: '☀️', title: 'Avon_v3 Light', value: 'avonV3Light' },
        { right: '🌑', title: 'Natura Dark', value: 'naturaDark' },
        { right: '☀️', title: 'Natura Light', value: 'naturaLight' },
        { right: '🌑', title: 'Natura_v3 Dark', value: 'naturaV3Dark' },
        { right: '☀️', title: 'Natura_v3 Light', value: 'naturaV3Light' },
        { right: '🌑', title: 'The Body Shop Dark', value: 'theBodyShopDark' },
        { right: '☀️', title: 'The Body Shop Light', value: 'theBodyShopLight' },
        { right: '🌑', title: 'Aesop Dark', value: 'aesopDark' },
        { right: '☀️', title: 'Aesop Light', value: 'aesopLight' },
        { right: '🌑', title: 'Biome Dark', value: 'biomeDark' },
        { right: '☀️', title: 'Biome Light', value: 'biomeLight' }
      ]
    }
  },
  custom: {
    name: 'Flags',
    description: 'Enable custom flags',
    toolbar: {
      showName: true,
      items: [
        { title: 'None', value: undefined },
        { title: 'Typography', value: 'typography' }
      ]
    }
  }
}

export default globalTypes
