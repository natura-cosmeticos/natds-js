# Troubleshooting

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
