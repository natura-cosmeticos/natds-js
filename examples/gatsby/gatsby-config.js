module.exports = {
  siteMetadata: {
    title: "Natura Design System example for Gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Roboto:400,500",
        ],
        display: "swap",
      },
    },
  ],
};
