# NatDS Styles

Natura Design System - Styles

## Test

Unit test

```sh
yarn test
```

## Lint

```sh
yarn lint
```

## Libs

No specific libs were used in this project, just pure typescript.

## Themes

Under `src/themes` you'll find our themes. If you want to add a new one, follow the `natura theme` example and make a light and dark version of the theme (this is a must). After that, add it to the export inside `src/themes.ts` file and you're ready to go, since the `web` and `mobile` packages will do the rest for you.

***
See the scripts section in the package.json file for the complete list of tasks.
