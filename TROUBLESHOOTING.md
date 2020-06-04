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

## Other errors not covered here

If you are facing other issues not covered here, try to follow these steps:

1. If you added `@material-ui/core` dependency, please remove it;
2. Remove `@naturacosmeticos/natds-styles` dependency;
3. Remove `@naturacosmeticos/natds-web` dependency;
4. Add only `@naturacosmeticos/natds-web` dependency again;
