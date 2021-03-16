export const globalTypes = {
  brand: {
    defaultValue: "natura",
    description: "Global theme for components",
    name: "Theme",
    toolbar: {
      items: [
        {
          title: "Aesop",
          value: "aesop",
        },
        {
          title: "Avon",
          value: "avon",
        },
        {
          title: "Natura",
          value: "natura",
        },
        {
          title: "The Body Shop",
          value: "theBodyShop",
        },
      ],
    },
  },
  mode: {
    defaultValue: "light",
    description: "Global theme for components",
    name: "Mode",
    toolbar: {
      items: [
        {
          title: "Light",
          value: "light",
        },
        {
          title: "Dark",
          value: "dark",
        },
      ],
    },
  }
};

export default globalTypes;
