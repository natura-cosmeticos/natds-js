// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require("../../jest.config.base.js");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { displayName, name } = require("./package.json");

const styleFiles = "\\.(css|sass)$";
const webResources = "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$";

module.exports = {
  ...base,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/webpack.config.js",
    "!.storybook/**",
    "!src/**/*.stories.tsx",
    "!src/**/Template.tsx",
    "!src/**/*.argTypes.ts",
    "!src/**/jest.config.js",
    "!src/**/__fixtures__/*.ts",
    "!src/**/*.props.ts",
    "!src/Components/Dialog*/Dialog*.tsx",
    "!src/Components/Drawer/Drawer.tsx",
    "!src/Components/DrawerBody/DrawerBody.tsx",
    "!src/Components/DrawerBody/DrawerBodyComponent/DrawerBodyComponent.tsx",
    "!src/Components/DrawerMenu/DrawerMenuItem/DrawerMenuItem.tsx",
    "!src/Components/DrawerMenu/DrawerMenuSection/DrawerMenuSection.tsx",
    "!src/Components/Field/Field.tsx",
    "!src/Components/Field/PasswordReveal/PasswordReveal.tsx",
    "!src/Components/Intro/Intro.styles.ts",
    "!src/Components/Popover/Popover.tsx",
    "!src/Components/SnackbarContent/SnackbarContent.styles.ts",
    "!src/Components/ToggleButton/ToggleButton.tsx",
    "!src/Components/CardActionArea/CardActionArea.tsx",
    "!src/Components/CardActions/CardActions.tsx",
    "!src/Components/CardContent/CardContent.tsx",
    "!src/Components/CardMedia/CardMedia.tsx",
    "!src/Components/CardHeader/CardHeader.tsx",
    "!src/hooks/**/*.ts",
  ],
  displayName,
  errorOnDeprecated: true,
  globalSetup: "./global-setup.js",
  moduleDirectories: ["node_modules", "../../node_modules"],
  moduleNameMapper: {
    [styleFiles]: "<rootDir>/src/__mocks__/styleMock.ts",
    [webResources]: "<rootDir>/src/__mocks__/fileMock.ts",
  },
  name,
  roots: ["<rootDir>/src", "<rootDir>/.storybook"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
  },
};
