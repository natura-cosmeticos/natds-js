# Troubleshooting

## Styled are not applied

When a component seems not to be styled according to Storybook, please check if you are importing and using the `<Provider>` component.

Most of times, you just need to import and use `Provider` once, wrapping all your application with Provider.

For example: you could put inside your `App/index.js` file:

```jsx
import React from 'react'
import {Provider, Button, Icon} from "@naturacosmeticos/natds-web";

export const App = () => (
    <Provider>
        <Button color={"primary"} variant={"contained"}>
            <Icon name={"filled-action-add"} size={"tiny"} />
            Button
        </Button>
    </Provider>
)
```

## Invalid hook call

### Check your `react` and `react-dom` dependencies

Ideally, just one version for `react` and `react-dom` should be installed.

1. Run `npm ls react` in your project and check if there's more than one entry;
2. Now check the same with `npm ls react-dom`;
3. Run `npm dedupe` and try to run your application again;
4. Try to vary your React versions and try to run your application again;

If nothing works, try the following steps:

### Look for possible conflicts with `@material-ui/core`

1. Check if you have installed `@material-ui/core` directly;
2. Try to vary your `@material-ui/core` versions and check if your application runs;
3. Try to uninstall `@material-ui/core` and reinstall `@naturacosmeticos/natds-web` and check if it works;

If nothing works, try the following steps:

### Check your code

You cannot use a hook inside a class component.

If this is happening, try to rewrite your component in one of the following formats and check if works:

   - function component;
   - arrow function component;

### Downgrade

If nothing works, and you don't need to use UMD packages, try to downgrade to `0.6.x`;

## Duplicate identifier errors

This error can occur when you use TypeScript in your project,
and when you have `@naturacosmeticos/natds-web` dependency installed.

You can try to fix this with the following steps:

1. Run the following command to reduce dependencies duplication:

   ```shell script
   npm dedupe
   ```

2. Try to run your application again.

## Subsequent property declarations must have the same type

This error can occur when you use TypeScript in your project,
and when you have `styled-components` installed.

You can try to fix this with the following steps:

1. Run the following command to check if `styled-components` is a dependency of your project:

   ```shell script
   npm ls @types/react-native
   ```

2. Make compiler options generate warnings instead of errors,
   adding the following line in your `tsconfig.json`:

   ```json
   {
      "noEmitOnError": true
   }
   ```

## Dependency warnings

### Version of react-dom/server with minor vulnerability

This error can occur when your project has `react-dom` version `16.2.0` as dependency.

You can try to fix this updating `react-dom` to `16.2.1`, `16.4.2` or higher.

## Other errors not covered here

If you are facing other issues not covered here, try to follow these steps:

1. Update `npm` globally running `npm install -g npm`;
2. If you added `@material-ui/core` dependency, please remove it;
3. Remove `@naturacosmeticos/natds-styles` dependency;
4. Remove `@naturacosmeticos/natds-web` dependency;
5. Add only `@naturacosmeticos/natds-web` dependency again;
